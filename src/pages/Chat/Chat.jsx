import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import text from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";
import { isEmpty } from "underscore";

const myId = 99;

const initSelectedChat = {
	id: 1,
	name: "Jonas Adam",
};

const initChatList = [{ id: 1, name: "Jonas Adam", lasMessage: "Hallo" }];

const initMessages = [
	{
		id: 1,
		name: "Jonas Adam",
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
];

const renderChat = ({ messages }, id) => {
	return (
		<>
			{messages.map((item, index) => {
				if (item.id === id) {
					return (
						<div
							key={index}
							className={classname(styles.otherchat)}
						>
							<p key={index}>{item.message}</p>
						</div>
					);
				} else {
					return (
						<div key={index} className={classname(styles.mychat)}>
							<p key={index}>{item.message}</p>
						</div>
					);
				}
			})}
		</>
	);
};

// const apeendMessage = (messages, message, id)

const Chat = (props) => {
	const [selectedChat, setSelectedChat] = React.useState(initSelectedChat);
	const [chatList, setChatList] = React.useState(initChatList);
	const [messages, setMessage] = React.useState(initMessages);
	const inputRef = React.useRef();

	const idx = messages.findIndex((message) => {
		return message.id === selectedChat.id;
	});
	return (
		<div className={classname(styles.chat)}>
			<div className={classname(styles.chatlistContainer)}>
				<div className={classname(styles.chatlistHeader)}>
					<h1 className={classname(text.headline2)}>Chats</h1>
				</div>
				{!isEmpty(chatList) ? (
					<div className={classname(styles.chatlist)}></div>
				) : (
					<h1 className={classname(text.headline2, styles.nochat)}>
						You haven't chat with anyone!
					</h1>
				)}
			</div>
			<div className={classname(styles.chatroomContainer)}>
				{!isEmpty(selectedChat) ? (
					<>
						<div className={classname(styles.chatroomHeader)}></div>
						<div className={classname(styles.chatroom)}>
							{idx >= 0 ? (
								renderChat(messages[idx], selectedChat.id)
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
