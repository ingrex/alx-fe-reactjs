import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Post #{id}</h1>
      <p className="text-gray-700">
        This is a dynamically generated page for the blog post with ID: {id}.
      </p>
    </div>
  );
};

export default BlogPost;
