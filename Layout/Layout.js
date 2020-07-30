import Head from "next/head";
import React, { Fragment } from "react";
import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Container from "@material-ui/core/Container";
import ClassITitleWrapper from "../components/ClassITitleWrapper/ClassITitleWrapper";
import Rwd768 from "../components/Rwd768/Rwd768";
import HeaderRoom from "react-headroom";
const Layout = (props) => {
	return (
		<Fragment>
			<Head>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className={styles.layout}>
				<div className={styles.pcWidth}>
					<HeaderRoom>
						<Header />
					</HeaderRoom>
					<div className={styles.container}>
						<ClassITitleWrapper
							title={"Learn with Academy - Academy Tutorial"}
						/>
						<Container maxWidth={false} className={styles.containerBackground}>
							<main>{props.children}</main>
						</Container>
					</div>
				</div>
				<div className={styles.padWidth}>
					<Rwd768 />
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
