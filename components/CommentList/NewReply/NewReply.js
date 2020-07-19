import avatarStyle from '../../../styles/components/avatar.module.scss';
import buttonStyle from '../../../styles/components/buttons.module.scss';
import styles from './NewReply.module.scss';
import React, { useState, useContext } from 'react';
import context from '../../context';
import moment from 'moment';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

const NewReply = ({ setNewReplyComment }) => {
  const contextValue = useContext(context);
  const { replyDiscussionList, setReplyDiscussionList } = contextValue;
  const [replyCommentValue, setReplyCommentValue] = useState('');
  const replyCommentSubmit = (event) => {
    event.preventDefault();
    const replyCommentItem = {
      reply: {
        name: 'Eric',
        date: moment().format('l'),
        content: replyCommentValue,
        goodCount: 0,
      },
    };
    setReplyDiscussionList([replyCommentItem, ...replyDiscussionList]);
    setNewReplyComment(false);
  };
  const changeReplyComment = (event) => {
    setReplyCommentValue(event.target.value);
  };
  return (
    <form onSubmit={replyCommentSubmit}>
      <div className={styles.addMessage}>
        <div className={avatarStyle.avatarMl}>E</div>
        <div className={styles.textAreaBox}>
          <textarea
            value={replyCommentValue}
            onChange={changeReplyComment}
            placeholder="新增回覆"
          />
        </div>
        <button className={buttonStyle.iconButtonSm}>
          <IconButton>
            <SendIcon fontSize="small" />
          </IconButton>
        </button>
      </div>
    </form>
  );
};

export default NewReply;
