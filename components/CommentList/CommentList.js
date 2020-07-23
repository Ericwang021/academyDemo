import React, { useContext } from "react";
import CommentItem from "./CommentItem/CommentItem";
import context from "../context";

const CommentList = ({ searchResult }) => {
	const contextValue = useContext(context);
	const selectRenderItem = (a, b) => {
		if (!!a.length) {
			return a;
		} else {
			return b;
		}
	};
	const isSearch = !!searchResult.length;
	const { discussionList } = contextValue;
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
