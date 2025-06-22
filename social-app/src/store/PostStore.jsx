import { createContext, useReducer } from "react";

export const PostStoreContext = createContext({
    postList: [],
    addPost: () => { },
    removePost: () => { },
});

const postReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
}



const PostStore = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postReducer, DEFAULT_POST_LIST);
    const addPost = (post) => {
        console.log("Adding post:", post);
        dispatchPostList({ type: 'ADD_POST', payload: post });
    }

    const removePost = (postId) => {
        console.log("Removing post with ID:", postId);

        dispatchPostList({ type: 'REMOVE_POST', payload: postId });
    }
    return (
        <PostStoreContext.Provider value={{ postList, addPost, removePost, }}>
            {children}
        </PostStoreContext.Provider>
    );
};

const DEFAULT_POST_LIST = [];

// Returns a random Unsplash image URL

export { PostStore };