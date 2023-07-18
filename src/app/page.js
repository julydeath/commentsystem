"use client";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Comments from "./components/Comments";

export default function Home() {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    { id: 1, parent_id: 1, message: "Hi Girish", children_id: null },
    { id: 2, parent_id: 2, message: "Hi Manoj", children_id: null },
    { id: 3, parent_id: 3, message: "Hi Akhil", children_id: null },
    {
      id: 4,
      parent_id: 11,
      message: "Hi Girish child",
      children_id: 1,
    },
    { id: 5, parent_id: 21, message: "Hi manoj 1", children_id: 2 },
    { id: 6, parent_id: 22, message: "Hi manoj 2", children_id: 21 },
    { id: 7, parent_id: 23, message: "Hi manoj 3", children_id: 22 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ id: nanoid(), parentId: nanoid(), message: input }]);
    setInput("");
  };

  return (
    <div className="w-[70%] mx-auto">
      <div>
        <h1 className="text-gray-500 text-5xl text-center mb-32 mt-10">
          Commenting system
        </h1>
      </div>
      <div>
        <form className="flex" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="border border-gray-500 rounded-xl w-full p-2 mr-4"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-400 rounded-xl p-2 text-black pl-4 pr-4">
            send
          </button>
        </form>
      </div>
      <div className="w-[70%] mx-auto p-4">
        {comments.map((message) => (
          <div key={message.id}>
            <Comments comment={message} allComments={comments} />
          </div>
        ))}
      </div>
    </div>
  );
}
