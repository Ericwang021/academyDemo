import React, { useState } from "react";
import CommentLayout from "../components/CommentLayout/CommentLayout";
import ClassInfoWrapper from "../components/ClassInfoWrapper/ClassInfoWrapper";
import VideoBox from "../components/VideoBox/VideoBox";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
const Index = () => {
	return (
		<div className="index">
			<section className="video-box-wrapper">
				<VideoBox />
				<CommentLayout />
			</section>
			<section className="video-title-wrapper">
				<ClassInfoWrapper />
				<ShareWrapper />
			</section>
		</div>
	);
};

export default Index;
