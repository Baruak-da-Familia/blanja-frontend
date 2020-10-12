import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import styles from "./styles.module.css";
import text from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";
import { isEmpty } from "underscore";
import { DateTime } from "luxon";
import { update } from "ramda";

const myId = 99;

const initialSelectedChat = {
	id: 1,
	name: "Jonas Adam",
};

// const initialChatList = [{ user, lastMessage: "Hallo" }];

const initialMessages = [
	{
		id: 1,
		name: "Jonas Adam",
		avatar: null,
		messages: [
			{
				id: 1,
				message: "Hallo",
				time: "21:16 12-10-2020",
			},
			{
				id: myId,
				message: "Hai",
				time: "21:16 12-10-2020",
			},
		],
	},
	{
		id: 2,
		name: "Bill Gates",
		avatar: null,
		messages: [
			{
				id: 2,
				message: "Hallo",
				time: "21:16 12-10-2020",
			},
			{
				id: myId,
				message: "Hai",
				time: "21:16 12-10-2020",
			},
		],
	},
];

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
	const [idx, setIdx] = React.useState(-1);
	// const [chatList, setChatList] = React.useState(initialChatList);
	const [messages, setMessage] = React.useState(initialMessages);

	const inputRef = React.useRef();

	const inputHandler = (e) => {
		if (e.key === "Enter") {
			setMessage(
				update(
					idx,
					{
						...messages[idx],
						messages: appendMessage(
							{
								id: myId,
								message: inputRef.current.value,
								time: DateTime.local().toFormat(
									"hh:mm dd-MM-yyyy"
								),
							},
							messages[idx]
						),
					},
					messages
				)
			);
			inputRef.current.value = "";
		}
	};

	const onClickHandler = (id) => {
		setIdx(
			messages.findIndex((message) => {
				return message.id === id;
			})
		);
	};

	return (
		<div className={classname(styles.chat)}>
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
										item.messages[item.messages.length - 1]
											.message
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
					<h1 className={classname(text.headline2, styles.nochat)}>
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
						<div className={classname(styles.chatroom)}>
							{idx >= 0 ? (
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
							className={classname(styles.inputmessageContainer)}
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
					<h1 className={classname(text.headline2, styles.nochat)}>
						Select chat to start chatting!
					</h1>
				)}
			</div>
		</div>
	);
};

Chat.propTypes = {};

export default Chat;
