import React from "react";
import IosIcon from "../../public/static/appStore.svg";
import GoogleIcon from "../../public/static/google-play-badge.svg";

const Rwd768 = () => {
	return (
		<div className="rwd-container">
			<div className="container-inner">
				<div className="title">與 Academy 一起學習</div>
				<div className="sub-title">
					這個網站不適用於小屏幕，查看 Academy App 以獲得最佳學習體驗
				</div>
				<ul className="icon">
					<li>
						<IosIcon />
					</li>
					<li>
						<GoogleIcon />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Rwd768;
