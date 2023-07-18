import React, { useState } from "react";

const Replies = ({ replyArray, allComments }) => {
  const [toggle, setToggle] = useState();
  return (
    <div>
      {replyArray.map((reply) => (
        <div key={reply.id}>
          {reply.message}
          <button
            className="bg-black text-white p-2"
            onClick={() => setToggle(!toggle)}
          >
            Replys
          </button>
          {toggle ? (
            <div className="">
              <Replies
                replyArray={allComments.filter(
                  (re) => reply.parent_id === re.children_id
                )}
                allComments={allComments}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Replies;
