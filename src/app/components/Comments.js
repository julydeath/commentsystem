import React, { useState } from "react";

import Replies from "./Replies";

const Comments = ({ comment, allComments }) => {
  const replyArray = allComments.filter(
    (replys) => comment.parent_id === replys.children_id
  );

  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <div className="w-[70%] mt-4 border p-4 ">
      <div>
        {comment.children_id === null ? (
          <div>
            <div className="flex justify-between">
              <p>{comment.message}</p>
              <button
                className="bg-black text-white items-baseline p-2"
                onClick={() => setToggle(!toggle)}
              >
                Replys
              </button>
            </div>
            {toggle ? (
              <Replies replyArray={replyArray} allComments={allComments} />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Comments;
