import styles from "./CommentLayout.module.scss";
import React, { useState, useReducer, useEffect } from "react";
import CommentList from "../CommentList/CommentList";
import NewComment from "../CommentList/NewComment/NewComment";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import IconButton from "@material-ui/core/IconButton";
import { initialSearchResult } from "../../redux/initialState/searchResultInitialState";
import { searchReducer } from "../../redux/reducer/searchReducer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { defaultDiscussionList, Provider } from "../../components/context";
import { IconAdd, IconClose, IconSearch, IconFeedBack } from "../Icon/Icon";

const CommentLayout = () => {
	const [searchResult, dispatch] = useReducer(
		searchReducer,
		initialSearchResult
	);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showComment, setShowComment] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [discussionList, setDiscussionList] = useState([
		...defaultDiscussionList,
	]);
	const searchHandleChange = (event) => {
		setSearchInput(event.target.value);
	};
	const searchHandleKeyUp = (event) => {
		const keyCode = event.keyCode;
		if (keyCode === 13) {
			discussionList.map((discussion) => {
				if (discussion.record.content.indexOf(searchInput) !== -1) {
					dispatch({ type: "search", data: discussion });
				}
			});
		}
	};
	const closeSearchBar = () => {
		setShowSearchBar(!showSearchBar);
	};
	useEffect(() => {
		if (!showSearchBar) {
			dispatch({ type: "clean" });
		}
	}, [showSearchBar]);
	const isSearch = !!searchResult.length;
	const commentContext = {
		discussionList,
		setDiscussionList,
		isSearch,
		searchResult,
	};
	return (
		<Provider value={commentContext}>
			<div className={styles.commentLayout}>
				<div className={styles.commentLayoutInner}>
					<Tabs defaultIndex={1}>
						<TabList className={styles.tabHead}>
							<Tab selectedClassName={styles.active}>
								<IconButton className={styles.iconButton}>
									<InfoIcon fontSize="large" />
								</IconButton>
								<span className={styles.iconText}>關於</span>
							</Tab>
							<Tab selectedClassName={styles.active}>
								<IconButton className={styles.iconButton}>
									<ForumIcon fontSize="large" />
								</IconButton>
								<span className={styles.iconText}>討論</span>
							</Tab>
							<Tab selectedClassName={styles.active}>
								<IconButton className={styles.iconButton}>
									<SubtitlesIcon fontSize="large" />
								</IconButton>
								<span className={styles.iconText}>字幕</span>
							</Tab>
							<Tab selectedClassName={styles.active}>
								<IconButton className={styles.iconButton}>
									<VideoLibraryIcon fontSize="large" />
								</IconButton>
								<span className={styles.iconText}>更多</span>
							</Tab>
						</TabList>
						<TabPanel className={styles.tabContent}></TabPanel>
						<TabPanel className={styles.tabContent}>
							<div className={styles.WrapperTopBox}>
								<div className={styles.wrapperTitleBox}>
									<div className={styles.title}>
										<span>
											<IconFeedBack />
										</span>
										問題和討論
									</div>
									<div className={styles.searchBox}>
										{showSearchBar ? (
											<input
												type="text"
												placeholder="搜尋討論"
												value={searchInput}
												onChange={searchHandleChange}
												onKeyUp={searchHandleKeyUp}
											/>
										) : null}
										<span onClick={closeSearchBar}>
											{showSearchBar ? <IconClose /> : <IconSearch />}
										</span>
									</div>
								</div>
								<div className={styles.addNew}>
									<div className={styles.addNewBox}>
										<span
											className={styles.text}
											onClick={() => setShowComment(!showComment)}
										>
											<IconAdd />
											新增討論
										</span>
									</div>
									{showComment ? (
										<NewComment setShowComment={setShowComment} />
									) : null}
								</div>
								<div className={styles.commentList}>
									{!isSearch ? (
										<div
											className={styles.totalComment}
										>{`${discussionList.length}個討論`}</div>
									) : (
										<div
											className={styles.totalComment}
										>{`${searchResult.length}個結果`}</div>
									)}
								</div>
							</div>
							<div
								className={
									!showComment ? styles.commentContainer : styles.extendReply
								}
							>
								<CommentList />
							</div>
						</TabPanel>
						<TabPanel className={styles.tabContent}></TabPanel>
						<TabPanel className={styles.tabContent}></TabPanel>
					</Tabs>
				</div>
			</div>
		</Provider>
	);
};

export default CommentLayout;
