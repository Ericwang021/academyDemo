import avatarStyle from "../../styles/components/avatar.module.scss";
import styles from "./ShareWrapper.module.scss";
import React from "react";
import { IconThumbUpOutline, IconShare } from "../Icon/Icon";

const ShareWrapper = () => {
	return (
		<div className={styles.shareWrapper}>
			<div className={styles.ownerBox}>
				<div className={avatarStyle.avatarUnit}>D</div>
				<ul className={styles.ownerDetail}>
					<li className={styles.ownerName}>Delta</li>
					<li>發布時間 • 3 個月前</li>
				</ul>
			</div>
			<ul className={styles.sharedController}>
				<li className={styles.sharedController}>
					<span className={styles.iconBox}>
						<IconThumbUpOutline />
					</span>
					<span>0</span>
				</li>
				<li>
					<IconShare />
				</li>
			</ul>
		</div>
	);
};

export default ShareWrapper;
