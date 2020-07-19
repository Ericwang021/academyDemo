import avatarStyle from '../../../styles/components/avatar.module.scss';
import commonStyle from '../../../styles/components/common.module.scss';
import commentDiscussStyles from '../../../styles/components/commentDiscuss.module.scss';
import React, { useState } from 'react';

const ReplyItem = ({ replyDiscussionList, deleteReplyComment }) => {
  const { reply } = replyDiscussionList;
  const { content, date, name } = reply;
  const [showEditInput, setShowEditInput] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };
  const handleSaveChange = () => {
    setShowEditInput(!showEditInput);
    setEditValue(editValue);
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
          <div className="contentBox">
            {showEditInput ? (
              <input
                className={commonStyle.input}
                type="text"
                value={editValue}
                onChange={handleEditChange}
              />
            ) : (
              <span className={commentDiscussStyles.commentContent}>
                {content}
              </span>
            )}
          </div>
          <div className={commentDiscussStyles.editDelete}>
            <div onClick={() => setShowEditInput(!showEditInput)}>
              {`${showEditInput ? '取消' : '編輯'}`}
            </div>
            {showEditInput ? (
              <div onClick={handleSaveChange}>儲存</div>
            ) : (
              <div onClick={deleteReplyComment}>刪除</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyItem;
