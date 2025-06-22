import { useContext } from "react";
import { PostStoreContext } from "../store/PostStore";

const PostListTable = () => {
    const { postList, removePost } = useContext(PostStoreContext);
    function getRandomImageUrl() {
        const images = ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"];
        const idx = Math.floor(Math.random() * images.length);
        return images[idx];
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr> <th>Image</th> <th>Title</th> <th>Body</th> <th>Tags</th> <th>Reactions</th> <th>Actions</th> </tr>
            </thead>
            <tbody>
                {
                    postList.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center">No posts available</td>
                        </tr>
                    ) : (
                        postList.map((post) => (
                            <tr key={post.id}>
                                <td>
                                    <img src={getRandomImageUrl()} className="rounded" alt="Post" style={{ width: "60px", height: "40px", objectFit: "cover" }} />
                                </td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    {post.tags.map((tag, idx) => (
                                        <span className="badge text-bg-primary m-1" key={tag + idx}>
                                            {tag}
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    <span className="badge bg-danger">{post.reactions}</span>
                                </td>
                                <td style={{ width: "150px" }}>
                                    {/* Example action icons (Bootstrap icons or FontAwesome) */}
                                    <button className="btn btn-sm btn-outline-primary me-1" title="Edit">
                                        Edit
                                    </button>
                                    <button onClick={() => removePost(post.id)} className="btn btn-sm btn-outline-danger" title="Delete">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    );
};

export default PostListTable;                                                                      