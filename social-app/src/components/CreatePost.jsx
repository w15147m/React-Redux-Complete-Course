import { useContext, useRef } from "react";
import { PostStoreContext } from "../store/PostStore";

const CreatePost = ({ showPostTable }) => {

    const { addPost } = useContext(PostStoreContext);
    const userIdRef = useRef();
    const postTitleRef = useRef();
    const postBodyRef = useRef();
    const reactionsRef = useRef();
    const tagsRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            userId: userIdRef.current.value,
            title: postTitleRef.current.value,
            body: postBodyRef.current.value,
            reactions: reactionsRef.current.value,
            tags: tagsRef.current.value.split(' ').map(tag => tag.trim()),
        };
        addPost(formData);
        e.target.reset();
        if (typeof showPostTable === "function") {
            showPostTable();
        }
    };

    return (
        <form className="container p-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input required type="text" className="form-control py-1" id="userId" name="userId" ref={userIdRef} placeholder="Enter user ID" />
            </div>
            <div className="form-group py-2">
                <label htmlFor="title">Title</label>
                <input required type="text" className="form-control py-1" id="title" name="title" ref={postTitleRef} placeholder="Enter title" />
            </div>
            <div className="form-group py-2">
                <label htmlFor="reactions">Reactions</label>
                <input required type="number" className="form-control py-1" id="reactions" name="reactions" ref={reactionsRef} placeholder="Enter number of reactions" />
            </div>
            <div className="form-group py-2">
                <label htmlFor="tags">Tags (comma separated)</label>
                <input required type="text" className="form-control py-1" id="tags" name="tags" ref={tagsRef} placeholder="Enter tags" />
            </div>
            <div className="form-group py-2">
                <label htmlFor="body">Body</label>
                <textarea className="form-control py-1" id="body" name="body" ref={postBodyRef} placeholder="Enter body" />
            </div>
            <button type="submit" className="my-3 btn btn-primary">Submit</button>
        </form>
    );
};

export default CreatePost;