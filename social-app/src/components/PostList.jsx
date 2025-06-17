import PostCard from "./PostCard";
const PostList = () => {
  return (
 <div className="container mt-5 d-flex flex-wrap justify-content-around">
  <PostCard/>
  <PostCard/>
  <PostCard/>
  </div>
  );
}
export default PostList;