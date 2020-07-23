import React, { useContext } from "react";
import ReplyItem from "../ReplyItem/ReplyItem";
import context from "../../context";

const ReplyList = ({ commentIndex }) => {
	const contextValue = useContext(context);
	const { discussionList, setDiscussionList } = contextValue;
	const replyList = discussionList[commentIndex].record.reply;
	console.log();
	// const deleteReplyComment = (index) => {
	// 	setReplyDiscussionList([
	// 		...[replyDiscussionList].splice(0, index),
	// 		...[replyDiscussionList].splice(index, replyDiscussionList.length),
	// 	]);
	// };

	return replyList.map((replyItem, index) => {
		return (
			<ReplyItem
				key={`replyList${index}`}
				replyItem={replyItem}
				replyIndex={index}
				commentIndex={commentIndex}
			/>
		);
	});
};

export default ReplyList;
