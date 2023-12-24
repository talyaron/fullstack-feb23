import React, { useState } from "react";
import { formatDate } from "../assets/functions";

class Comment {
  public time: Date;
  constructor(public text: string) {
    this.time = new Date();
  }
}


const Comments = () => {
  const [text, setText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  return (
    <div>
      <div className="commentsDiv">
        <div className="commentsList">
          {comments.map((comment) => {
            return (
              <div className="commentDiv ">
                <p>{comment.text}</p>
                <p>{formatDate(comment.time)}</p>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setComments([...comments, new Comment(text)]);
          }}
        >
          <input
            type="text"
            name="commentInput"
            id="commentInput"
            onChange={(e) => setText(e.target.value)}
            placeholder="Add comment..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
