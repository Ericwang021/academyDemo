import React, { useContext } from "react";
import CommentItem from "./CommentItem/CommentItem";
import context from "../context";

const CommentList = () => {
	const contextValue = useContext(context);
	const selectRenderItem = (a, b) => {
		if (!!a.length) {
			return a;
		} else {
			return b;
		}
	};
	const { discussionList, searchResult } = contextValue;
	const renderList = selectRenderItem(searchResult, discussionList);
	return renderList.map((renderItem, index) => (
		<CommentItem
			key={`comment${index}`}
			index={index}
			renderItem={renderItem}
		/>
	));
};

export default CommentList;
