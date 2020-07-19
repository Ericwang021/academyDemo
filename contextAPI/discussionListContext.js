import { createContext } from "react";
const discussionList = [
	{
		record: {
			name: "",
			date: "",
			content: "",
			reply: [
				{
					record: {
						name: "",
						date: "",
						content: "",
					},
				},
			],
		},
	},
];
export const discussionListContext = createContext({ discussionList });
const context = createContext();
export const { Provider, Consumer } = context;
export default context;
