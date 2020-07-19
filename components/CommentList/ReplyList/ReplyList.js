import React, { useContext } from 'react';
import ReplyItem from '../ReplyItem/ReplyItem';
import context from '../../context';

const ReplyList = () => {
  const contextValue = useContext(context);
  const { replyDiscussionList, setReplyDiscussionList } = contextValue;

  const deleteReplyComment = (index) => {
    setReplyDiscussionList([
      ...[replyDiscussionList].splice(0, index),
      ...[replyDiscussionList].splice(index, replyDiscussionList.length),
    ]);
  };

  return replyDiscussionList.map((replyDiscussionList, index) => {
    return (
      <ReplyItem
        key={`replyDiscussionList${index}`}
        replyDiscussionList={replyDiscussionList}
        index={index}
        deleteReplyComment={deleteReplyComment}
      />
    );
  });
};

export default ReplyList;
