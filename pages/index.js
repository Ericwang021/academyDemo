import React, { useState } from 'react';
import CommentLayout from '../components/CommentLayout/CommentLayout';
import ClassInfoWrapper from '../components/ClassInfoWrapper/ClassInfoWrapper';
import VideoBox from '../components/VideoBox/VideoBox';
import {
  defaultDiscussionList,
  defaultReplyDiscussionList,
  Provider,
} from '../components/context';

const Index = () => {
  const [discussionList, setDiscussionList] = useState([
    ...defaultDiscussionList,
  ]);
  const [replyDiscussionList, setReplyDiscussionList] = useState([
    ...defaultReplyDiscussionList,
  ]);
  const commentContext = {
    discussionList,
    setDiscussionList,
    replyDiscussionList,
    setReplyDiscussionList,
  };
  return (
    <Provider value={commentContext}>
      <div className="index">
        <section className="video-box-wrapper">
          <VideoBox />
          <CommentLayout />
        </section>
        <section className="video-title-wrapper">
          <ClassInfoWrapper />
        </section>
      </div>
    </Provider>
  );
};

export default Index;
