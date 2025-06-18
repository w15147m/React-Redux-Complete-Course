
import { useState } from "react";
import CreatePost from "./CreatePost";
import PostListTable from "./PostlistTable";
const CRUDPOST = () => {
    const [addPost, setAddPost] = useState(false);
    return (
        <div>
            <div className="container p-3">
                <div className="w-100 d-flex justify-content-between align-items-center ">
                    <h4 className="text-start">{addPost ? "add Post"  : 'post Table' }</h4>
                    <button onClick={() => setAddPost(!addPost)}  className="btn btn-primary d-flex align-items-center">
                        <span className="badge bg">{addPost ? "Show Posts" : "Add Post"}</span>
                    </button>
                </div>
                {addPost ? <CreatePost /> : <PostListTable />}
            </div>
        </div>
    );

}
export default CRUDPOST;
