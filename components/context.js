import { createContext } from 'react';
export const defaultDiscussionList = [];
export const defaultReplyDiscussionList = [];
const context = createContext();
export const { Provider, Consumer } = context;
export default context;
