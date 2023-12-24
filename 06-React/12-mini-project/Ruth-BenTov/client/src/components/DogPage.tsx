import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./dogPage.scss";
import { formatDate } from "../assets/functions";
import { Value } from "sass";

class Comment {
  public time: Date;
  constructor(public text: string) {
    this.time = new Date();
  }
}

const dogPage = () => {
  const [type, setType] = useState(useParams().type);

  const [imgUrl, setImgUrl] = useState(useLocation().state.imgUrl);
  const [text, setText] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <>
      <h3>{type}</h3>
      <div className="dogPageDiv">
        <div className="mainDiv">
          <img src={imgUrl} alt="dog" />
        </div>
        <div className="commentsDiv">
          <div className="commentsList">
            {comments.map((comment) => {
              return (
                <div className="commentDiv ">
                  <p className="commentText">{comment.text}</p>
                  <p className="commentTime">{formatDate(comment.time)}</p>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={(ev: React.FormEvent<HTMLFormElement>) => {
              ev.preventDefault();
              if (text != "") {
                setComments([...comments, new Comment(text)]);
                setText("");
              }
            }}
          >
            <input
              type="text"
              name="commentInput"
              id="commentInput"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Add comment..."
            />
            <button className="btnAddComment" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default dogPage;
