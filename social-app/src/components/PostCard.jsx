import { useContext } from "react";
import { PostStoreContext } from "../store/PostStore";

const PostCard = () => {
    const { postList } = useContext(PostStoreContext);
    return (
        <>
            {postList.map((post) => (
                <div className="card p-1 mb-3" style={{ width: "18rem" }} key={post.id}>
                    <img className="card-img-top" src={post.image} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>

                    <div>
                        {post.tags.map((tag, idx) => (
                            <span className="badge w-40 m-1 text-bg-primary position-relative" key={tag + idx} >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginLeft: "4px" }}>
                        +{post.reactions}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            ))}
        </>
    );
}
export default PostCard;                                                                       