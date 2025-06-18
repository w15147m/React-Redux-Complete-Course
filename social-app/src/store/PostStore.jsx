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

const addPost = (post) => {
    dispatchPostList({ type: 'ADD_POST', payload: post });
}

const removePost = (postId) => {
    dispatchPostList({ type: 'REMOVE_POST', payload: postId });
}

const PostStore = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postReducer, DEFAULT_POST_LIST);
    return (
        <PostStoreContext.Provider value={{ postList, addPost, removePost, }}>
            {children}
        </PostStoreContext.Provider>
    );
};
  
    const DEFAULT_POST_LIST = [
        {
            id: "1",
            title: "Going to Mumbai",
            body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
            reactions: 2,
            userId: "user-9",
            tags: ["vacation", "Mumbai", "Enjoying"],
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "2",
            title: "Learning React",
            body: "Started learning React today. Components and hooks are awesome!",
            reactions: 5,
            userId: "user-2",
            tags: ["React", "Learning", "Programming"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "3",
            title: "Morning Run",
            body: "Had a great run in the park this morning. Feeling refreshed.",
            reactions: 3,
            userId: "user-5",
            tags: ["Fitness", "Running", "Morning"],
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "4",
            title: "Book Recommendation",
            body: "Just finished reading 'Atomic Habits'. Highly recommend it to everyone.",
            reactions: 7,
            userId: "user-7",
            tags: ["Books", "Recommendation", "Habits"],
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "5",
            title: "Cooking Pasta",
            body: "Tried a new pasta recipe today. Turned out delicious!",
            reactions: 4,
            userId: "user-3",
            tags: ["Cooking", "Pasta", "Food"],
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
        }
    ];
    export { PostStore };