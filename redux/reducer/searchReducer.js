export const searchReducer = (state, action) => {
	switch (action.type) {
		case "search":
			return [...state, action.data];
		case "clean":
			return [];
		default:
			throw new Error();
	}
};
