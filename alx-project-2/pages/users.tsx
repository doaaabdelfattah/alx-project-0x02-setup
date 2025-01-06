"use-client";
import PostCard from "@/components/common/PostCard";
import UserCard from "@/components/common/UserCard";
import React from "react";
import { useState, useEffect } from "react";
const Users = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
      <h1 className="text-5xl font-semibold text-center my-10 text-orange-800">
        All Users
      </h1>
      <div className=" w-[85%] grid grid-cols-2 gap-10 mx-auto">
        {data.map((user) => (
          <UserCard
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            address={user.address}
            key={user.id}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
