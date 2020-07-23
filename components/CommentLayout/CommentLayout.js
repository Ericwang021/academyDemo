import styles from "./CommentLayout.module.scss";
import React, {
	useState,
	useContext,
	useReducer,
	Fragment,
	useEffect,
} from "react";
import CommentList from "../CommentList/CommentList";
import NewComment from "../CommentList/NewComment/NewComment";
import context from "../context";
import { IconAdd, IconClose, IconSearch, IconFeedBack } from "../Icon/Icon";
import { initialSearchResult } from "../../redux/initialState/searchResultInitialState";
import { searchReducer } from "../../redux/reducer/searchReducer";

const CommentLayout = () => {
	const contextValue = useContext(context);
	const { discussionList } = contextValue;
	const [searchResult, dispatch] = useReducer(
		searchReducer,
		initialSearchResult
	);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showComment, setShowComment] = useState(false);
	const [searchInput, setSearchInput] = useState("");

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

	return (
		<Fragment>
			<div className={styles.commentLayout}>
				<div className={styles.commentLayoutInner}>
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
							<div
								className={styles.totalComment}
							>{`${discussionList.length}個討論`}</div>
						</div>
					</div>
					<div className={styles.commentContainer}>
						<CommentList searchResult={searchResult} />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CommentLayout;
