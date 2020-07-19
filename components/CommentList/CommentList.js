import React, { useContext } from 'react';
import CommentItem from './CommentItem/CommentItem';
import context from '../context';

const CommentList = () => {
  const contextValue = useContext(context);
  const { discussionList, setDiscussionList } = contextValue;

  const deletedCommentItem = (index) => {
    setDiscussionList(
      discussionList.slice(index !== 0 ? 0 + index : index + 1),
    );
  };

  return discussionList.map((discussion, index) => (
    <CommentItem
      key={`comment${index}`}
      discussion={discussion}
      index={index}
      deletedCommentItem={deletedCommentItem}
    />
  ));
};

export default CommentList;
