import { useContext } from "react";
import { PostStoreContext } from "../store/PostStore";

const PostCard = () => {
    const { postList, getData } = useContext(PostStoreContext);
    function getRandomImageUrl() {
        const images = ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"];
        const idx = Math.floor(Math.random() * images.length);
        return images[idx];
    }
    return (
        <>
            {
                postList.length === 0 ? (
                    <span className="p-5">
                        <center className="">No posts available</center>
                        <center className="p-3">
                            <button className="btn btn-primary" onClick={getData}>Fetch Posts</button>
                        </center>

                    </span>
                ) : (
                    postList.map((post) => (
                        <div className="card p-1 mb-3" style={{ width: "18rem" }} key={post.id}>
                            <img className="card-img-top" src={getRandomImageUrl()} alt="Card cap" />
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

                            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginLeft: "4px" }}>
                                +{post.reactions}
                                <span className="visually-hidden">unread messages</span>
                            </span> */}
                        </div>
                    ))
                )
            }
        </>
    ); ``
}
export default PostCard;                                                                       