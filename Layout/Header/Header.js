import avatarStyle from "../../styles/components/avatar.module.scss";
import styles from "./Header.module.scss";
import React from "react";
import Logo from "../../public/static/academy-logo.svg";
import LanguageIcon from "@material-ui/icons/Language";
import { IconButton } from "@material-ui/core";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<a href="/">
					<div>
						<Logo />
					</div>
					<div className={styles.logoText}>Academy</div>
				</a>
				<nav>
					<ul>
						<li>
							<a href="/">探索</a>
						</li>
						<li>
							<a href="/">我的課程</a>
						</li>
					</ul>
				</nav>
				<div className={styles.personBox}>
					<IconButton>
						<LanguageIcon fontSize="20px" />
					</IconButton>
					<div className={avatarStyle.avatarLg}>E</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
