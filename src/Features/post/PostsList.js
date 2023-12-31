import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from "react";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content && post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsList;
