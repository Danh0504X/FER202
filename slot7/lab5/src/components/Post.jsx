import React from "react";

export default function Post({ post }) {
  if (!post) return null;

  return (
    <div className="border rounded p-3 bg-white">
      <h5 className="mb-2">{post.title}</h5>
      <div className="text-muted">{post.body}</div>
    </div>
  );
}
