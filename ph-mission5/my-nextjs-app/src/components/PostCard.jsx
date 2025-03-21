const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
      <h2 className="text-lg font-semibold text-gray-900">{post.title}</h2>
      <p className="text-sm text-gray-700 mt-2">{post.body}</p>
      <div className="mt-4 text-right">
        <p className="text-xs text-gray-500">Post ID: {post.id}</p>
        <p className="text-xs text-gray-500">User ID: {post.userId}</p>
      </div>
    </div>
  );
};

export default PostCard;
