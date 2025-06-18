import { useContext } from "react";
import { PostStoreContext } from "../store/PostStore";

const PostListTable = () => {
    const { postList } = useContext(PostStoreContext);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Tags</th>
                    <th>Reactions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {postList.map((post) => (
                    <tr key={post.id}>
                        <td>
                            <img src={post.image} className="rounded" alt="Post" style={{ width: "60px", height: "40px", objectFit: "cover" }} />
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
                            <button className="btn btn-sm btn-outline-danger" title="Delete">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PostListTable;                                                                      