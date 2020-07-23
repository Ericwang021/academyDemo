import avatarStyle from "../../../styles/components/avatar.module.scss";
import buttonStyle from "../../../styles/components/buttons.module.scss";
import styles from "./NewReply.module.scss";
import React, { useState, useContext } from "react";
import context from "../../context";
import moment from "moment";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const NewReply = ({ setShowNewReply, commentIndex }) => {
	const contextValue = useContext(context);
	const { discussionList, setDiscussionList } = contextValue;
	const [replyCommentValue, setReplyCommentValue] = useState("");
	const replyCommentSubmit = () => {
		const replyCommentItem = {
			name: "Eric",
			date: moment().format("l"),
			content: replyCommentValue,
		};
		let temp = discussionList;
		temp[commentIndex].record.reply = [
			replyCommentItem,
			...temp[commentIndex].record.reply,
		];
		setDiscussionList([...temp]);
		setShowNewReply(false);
	};
	const changeReplyComment = (event) => {
		setReplyCommentValue(event.target.value);
	};
	return (
		<form>
			<div className={styles.addMessage}>
				<div className={avatarStyle.avatarMl}>E</div>
				<div className={styles.textAreaBox}>
					<textarea onChange={changeReplyComment} placeholder="新增回覆" />
				</div>
				<button
					className={buttonStyle.iconButtonSm}
					onClick={replyCommentSubmit}
				>
					<IconButton>
						<SendIcon fontSize="small" />
					</IconButton>
				</button>
			</div>
		</form>
	);
};

export default NewReply;
