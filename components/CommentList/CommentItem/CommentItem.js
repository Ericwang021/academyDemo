import avatarStyle from "../../../styles/components/avatar.module.scss";
import commonStyle from "../../../styles/components/common.module.scss";
import styles from "./CommentItem.module.scss";
import React, { Fragment, useContext, useState } from "react";
import context from "../../context";
import NewReply from "../NewReply/NewReply";
import ReplyList from "../ReplyList/ReplyList";

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
		<div className={styles.comment}>
			<div className={styles.titleMarket}>Explore</div>
			<div className={styles.commentInner}>
				<div className={styles.personalInfo}>
					<div className={styles.MarketNumber}>{index + 1}</div>
					<div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
					<div className={styles.commentBox}>
						<div className={styles.nameText}>
							<div className={styles.name}>{name}</div>
							<div className={styles.date}>{date}</div>
						</div>
					</div>
				</div>
				<div className={styles.commentWrapper}>
					<div className={styles.commentBox}>
						<div className={styles.contentBox}>
							{showEditInput ? (
								<input
									className={commonStyle.input}
									type="text"
									defaultValue={content}
									onChange={handleEditChange}
								/>
							) : (
								<div className={styles.commentBoxInner}>
									<span className={styles.commentContent}>{content}</span>
									{!isSearch ? (
										<div className={styles.rightContent}>
											<span
												className={everGood ? styles.clicked : styles.lattice}
												onClick={clickedLattice}
											>
												+1
											</span>
											<span className={styles.number}>{goodCount}</span>
										</div>
									) : null}
								</div>
							)}
						</div>
						{!isSearch ? (
							<Fragment>
								<div className={styles.editDelete}>
									<div onClick={() => setShowEditInput(!showEditInput)}>
										{`${showEditInput ? "取消" : "編輯"}`}
									</div>
									{showEditInput ? (
										<div onClick={handleSaveChange}>儲存</div>
									) : (
										<div onClick={deletedCommentItem}>刪除</div>
									)}
								</div>
							</Fragment>
						) : null}
					</div>

					<div
						className={styles.feedbackText}
						onClick={() => setShowNewReply(!showNewReply)}
					>
						回覆
					</div>
					{showNewReply ? (
						<NewReply setShowNewReply={setShowNewReply} commentIndex={index} />
					) : null}
					<ReplyList commentIndex={index} />
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
