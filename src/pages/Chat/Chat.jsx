import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import useLocalStorage from "../../utils/localStorageHooks";
import Socket from "socket.io-client";
import styles from "./styles.module.css";
import text from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";
import { isEmpty } from "underscore";
import { DateTime } from "luxon";
import { update } from "ramda";
import { v4 as uuidv4 } from "uuid";

// const myId = 14;

// const initialMessages = [
// 	{
// 		id: 1,
// 		name: "Jonas Adam",
// 		avatar: null,
// 		messages: [
// 			{
// 				id: 1,
// 				message: "Hallo",
// 				time: "21:16 12-10-2020",
// 			},
// 			{
// 				id: myId,
// 				message: "Hai",
// 				time: "21:16 12-10-2020",
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Bill Gates",
// 		avatar: null,
// 		messages: [
// 			{
// 				id: 2,
// 				message: "Hallo",
// 				time: "21:16 12-10-2020",
// 			},
// 			{
// 				id: myId,
// 				message: "Hai",
// 				time: "21:16 12-10-2020",
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: "Mark Zuckerberg",
// 		avatar: null,
// 		message: [],
// 	},
// ];

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const renderChat = ({ messages }, id) => {
	return (
		<>
			{messages.map((item, index) => {
				if (item.id === id) {
					return (
						<>
							<div
								key={index}
								className={classname(styles.otherchat)}
							>
								<p key={index}>{item.message}</p>
							</div>
							<p>{item.time}</p>
						</>
					);
				} else {
					return (
						<>
							<div
								key={index}
								className={classname(styles.mychat)}
							>
								<p key={index}>{item.message}</p>
							</div>
							<p className="text-right">{item.time}</p>
						</>
					);
				}
			})}
		</>
	);
};

const appendMessage = (message, { messages }) => {
	const newMessage = [...messages];
	newMessage.push(message);
	return newMessage;
};

const Chat = (props) => {
	const [myId, setId] = React.useState(uuidv4());
	const [idx, setIdx] = React.useState(-1);
	const [socket, setSocket] = React.useState(null);
	const [messages, setMessage] = useLocalStorage(myId, []);

	const inputRef = React.useRef();

	const messageRef = React.useRef();

	const testRef = React.useRef();

	React.useEffect(() => {
		if (socket !== null) return;
		const newSocket = Socket("http://192.168.18.36:3300", {
			query: { id: myId },
		});
		setSocket(newSocket);
		console.log(myId);
		return () => {
			if (socket) socket.close();
		};
	}, [myId]);

	React.useEffect(() => {
		if (socket === null) return;
		socket.on("message", ({ senderId, name, avatar, message, time }) => {
			const _idx = messages.findIndex((item) => {
				return item.id === senderId;
			});
			if (_idx >= 0) {
				setMessage(
					update(
						_idx,
						{
							...messages[idx],
							messages: appendMessage(
								{
									id: senderId,
									message,
									time,
								},
								messages[idx]
							),
						},
						messages
					)
				);
			} else {
				const newMessages = [
					...messages,
					{
						id: senderId,
						name,
						avatar,
						messages: [{ id: senderId, message, time }],
					},
				];
				setMessage(newMessages);
			}
			if (messageRef.current !== undefined) {
				scrollToRef(messageRef);
			}
		});
		return () => socket.off("message");
	}, [socket, messages, messageRef]);

	const inputHandler = (e) => {
		if (e.key === "Enter") {
			const time = DateTime.local().toFormat("hh:mm dd-MM-yyyy");
			if (!isEmpty(messages[idx].messages)) {
				setMessage(
					update(
						idx,
						{
							...messages[idx],
							messages: appendMessage(
								{
									id: myId,
									message: inputRef.current.value,
									time,
								},
								messages[idx]
							),
						},
						messages
					)
				);
			} else {
				setMessage(
					update(
						idx,
						{
							...messages[idx],
							messages: [
								{
									id: myId,
									message: inputRef.current.value,
									time,
								},
							],
						},
						messages
					)
				);
			}
			socket.emit("message", {
				senderId: myId,
				receiverId: messages[idx].id,
				name: myId,
				avatar: null,
				message: inputRef.current.value,
				time,
			});
			inputRef.current.value = "";
			if (messageRef.current !== undefined) {
				scrollToRef(messageRef);
			}
		}
	};
	//for testing purpose ================================
	const handleTest = (event) => {
		if (event.key === "Enter") {
			const _idx = messages.findIndex((item) => {
				return item.id === testRef.current.value;
			});
			if (_idx < 0) {
				const newMessages = [
					...messages,
					{
						id: testRef.current.value,
						name: testRef.current.value,
						avatar: null,
						messages: [],
					},
				];
				setMessage(newMessages);
			}
			testRef.current.value = "";
		}
	};

	//=====================================================

	const onClickHandler = (id) => {
		setIdx(
			messages.findIndex((message) => {
				return message.id === id;
			})
		);
	};

	return (
		<>
			<div className={classname(styles.chat)}>
				{/* <input
					ref={testRef}
					placeholder="masukin id"
					onKeyPress={handleTest}
				/> */}
				<div className={classname(styles.chatlistContainer)}>
					<div className={classname(styles.chatlistHeader)}>
						<h1 className={classname(text.headline2)}>Chats</h1>
					</div>
					{!isEmpty(messages) ? (
						<div className={classname(styles.chatlist)}>
							{messages.map((item) => {
								return (
									<UserCard
										key={String(item.id)}
										lastChat={
											!isEmpty(item.messages)
												? item.messages[
														item.messages.length - 1
												  ].message
												: ""
										}
										name={item.name}
										avatar={item.avatar}
										id={item.id}
										onClick={onClickHandler}
									/>
								);
							})}
						</div>
					) : (
						<h1
							className={classname(text.headline2, styles.nochat)}
						>
							You haven't chat with anyone!
						</h1>
					)}
				</div>
				<div className={classname(styles.chatroomContainer)}>
					{idx >= 0 ? (
						<>
							<div className={classname(styles.chatroomHeader)}>
								<UserCard
									key={String(messages[idx].id)}
									name={messages[idx].name}
									avatar={messages[idx].avatar}
								/>
							</div>
							<div
								ref={messageRef}
								className={classname(styles.chatroom)}
							>
								{!isEmpty(messages[idx].messages) ? (
									renderChat(messages[idx], messages[idx].id)
								) : (
									<h1
										className={classname(
											text.headline2,
											styles.nochat
										)}
									>
										Send your first message!
									</h1>
								)}
							</div>
							<div
								className={classname(
									styles.inputmessageContainer
								)}
							>
								<input
									ref={inputRef}
									placeholder="type message"
									className={classname(styles.inputmessage)}
									onKeyPress={inputHandler}
								/>
							</div>
						</>
					) : (
						<h1
							className={classname(text.headline2, styles.nochat)}
						>
							Select chat to start chatting!
						</h1>
					)}
				</div>
			</div>
		</>
	);
};

Chat.propTypes = {};

export default Chat;
