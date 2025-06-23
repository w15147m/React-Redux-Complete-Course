import { createContext, useReducer } from "react";
import { useEffect } from "react";

const DEFAULT_POST_LIST = [];

export const PostStoreContext = createContext({
    postList: [],
    addPost: () => {},
    removePost: () => {},
    getData: () => {},
});

const postReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'ADD_POST_LIST':
            return action.payload;
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
};

const PostStore = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postReducer, DEFAULT_POST_LIST);

    const addPost = (post) => {
        dispatchPostList({ type: 'ADD_POST', payload: post });
    };

    const removePost = (postId) => {
        dispatchPostList({ type: 'REMOVE_POST', payload: postId });
    };

    const getData = () => {
        fetch("https://dummyjson.com/posts")
            .then((response) => response.json())
            .then((data) => {
                dispatchPostList({ type: 'ADD_POST_LIST', payload: data.posts });
            })
            .catch((error) => {
                console.error("Failed to fetch posts:", error);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <PostStoreContext.Provider value={{ postList, addPost, removePost, getData }}>
            {children}
        </PostStoreContext.Provider>
    );
};

export { PostStore };
