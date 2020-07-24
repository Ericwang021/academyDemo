import styles from "./ReplyItem.module.scss";
import avatarStyle from "../../../styles/components/avatar.module.scss";
import commonStyle from "../../../styles/components/common.module.scss";
import commentDiscussStyles from "../../../styles/components/commentDiscuss.module.scss";
import context from "../../context";
import React, { useContext, useState } from "react";

const ReplyItem = ({ commentIndex, replyItem, replyIndex }) => {
	const contextValue = useContext(context);
	const { discussionList, setDiscussionList, isSearch } = contextValue;
	const replyList = discussionList[commentIndex].record.reply;
	const { content, date, name } = replyItem;
	const [showEditInput, setShowEditInput] = useState(false);
	const [editValue, setEditValue] = useState(content);
	const handleEditChange = (event) => {
		setEditValue(event.target.value);
	};
	const handleSaveChange = () => {
		let temp = discussionList;
		temp[commentIndex].record.reply[replyIndex] = editValue;
		setDiscussionList([...temp]);
		setShowEditInput(!showEditInput);
	};
	const deleteReply = () => {
		let temp = discussionList;
		let tempReply = [];
		replyList.map((item, id) => {
			if (id !== replyIndex) {
				tempReply.push(item);
			}
		});
		temp[commentIndex].record.reply = tempReply;
		setDiscussionList([...temp]);
	};
	return (
		<div className={styles.replyItem}>
			<div className={styles.replyPersonalInfo}>
				<div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
				<div className={styles.nameText}>
					<div className={styles.name}>{name}</div>
					<div>{date}</div>
				</div>
			</div>
			<div className={styles.commentBox}>
				<div className={styles.contentBox}>
					{showEditInput ? (
						<input
							className={commonStyle.input}
							type="text"
							onChange={handleEditChange}
							defaultValue={content}
						/>
					) : (
						<span className={styles.commentContent}>{content}</span>
					)}
				</div>
				<div className={styles.ReplyEditDelete}>
					<div className={styles.ReplyEditDeleteInner}>
						<div onClick={() => setShowEditInput(!showEditInput)}>
							{`${showEditInput ? "取消" : "編輯"}`}
						</div>
						{showEditInput ? (
							<div onClick={handleSaveChange}>儲存</div>
						) : (
							<div onClick={deleteReply}>刪除</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReplyItem;
