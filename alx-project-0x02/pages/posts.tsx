"use-client";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import React from "react";
import { useState, useEffect } from "react";
const Posts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <>
      <Header />
      <h1 className="text-5xl font-semibold text-center my-10 text-orange-800">
        All Posts
      </h1>
      <div className="grid grid-cols-4 gap-8 w-[85%] mx-auto">
        {data.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            userId={post.userId}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
