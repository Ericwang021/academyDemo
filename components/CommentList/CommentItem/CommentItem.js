import React, { useContext, useState } from "react";
import context from "../../context";
import avatarStyle from "../../../styles/components/avatar.module.scss";
import commonStyle from "../../../styles/components/common.module.scss";
import commentDiscussStyles from "../../../styles/components/commentDiscuss.module.scss";
import ReplyList from "../ReplyList/ReplyList";
import NewReply from "../NewReply/NewReply";
const CommentItem = ({ renderItem, index }) => {
	const contextValue = useContext(context);
	const { isSearch, discussionList, setDiscussionList } = contextValue;
	const discussion = renderItem;
	const { name, content, date, goodCount, everGood } = discussion.record;
	const [editValue, setEditValue] = useState(content);
	const [showEditInput, setShowEditInput] = useState(false);
	const [showNewReply, setShowNewReply] = useState(false);

	const deletedCommentItem = () => {
		let temp = [];
		discussionList.map((item, id) => {
			if (id !== index) {
				temp.push(item);
			}
		});
		setDiscussionList([...temp]);
	};

	const handleEditChange = (event) => {
		const value = event.target.value;
		setEditValue(value);
	};

	const clickedLattice = () => {
		let temp = discussionList;
		if (everGood) {
			temp[index].record.goodCount = temp[index].record.goodCount - 1;
		} else {
			temp[index].record.goodCount = temp[index].record.goodCount + 1;
		}
		temp[index].record.everGood = !everGood;
		setDiscussionList([...temp]);
	};

	const handleSaveChange = () => {
		let temp = discussionList;
		temp[index].record.content = editValue;
		setDiscussionList([...temp]);
		setShowEditInput(!showEditInput);
	};
	return (
		<div className={commentDiscussStyles.comment}>
			<div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
			<div className={commentDiscussStyles.commentWrapper}>
				<div className={commentDiscussStyles.commentBox}>
					<div className={commentDiscussStyles.nameText}>
						<div>{name}</div>
						<div>{date}</div>
					</div>
				</div>
				<div className={commentDiscussStyles.commentBox}>
					<div className={commentDiscussStyles.contentBox}>
						{showEditInput ? (
							<input
								className={commonStyle.input}
								type="text"
								defaultValue={content}
								onChange={handleEditChange}
							/>
						) : (
							<span className={commentDiscussStyles.commentContent}>
								{content}
							</span>
						)}
					</div>
					<div className={commentDiscussStyles.rightContent}>
						<span
							className={
								everGood
									? commentDiscussStyles.clicked
									: commentDiscussStyles.lattice
							}
							onClick={clickedLattice}
						>
							+1
						</span>
						<span className={commentDiscussStyles.number}>{goodCount}</span>
					</div>
					<div className={commentDiscussStyles.editDelete}>
						<div onClick={() => setShowEditInput(!showEditInput)}>
							{`${showEditInput ? "取消" : "編輯"}`}
						</div>
						{showEditInput ? (
							<div onClick={handleSaveChange}>儲存</div>
						) : (
							<div onClick={deletedCommentItem}>刪除</div>
						)}
					</div>
				</div>
				<ReplyList commentIndex={index} />
				<div className={commentDiscussStyles.replyCommentBox}>
					<div
						className={commentDiscussStyles.feedbackText}
						onClick={() => setShowNewReply(!showNewReply)}
					>
						回覆
					</div>
				</div>
				{showNewReply ? (
					<NewReply setShowNewReply={setShowNewReply} commentIndex={index} />
				) : null}
			</div>
		</div>
	);
};

export default CommentItem;
