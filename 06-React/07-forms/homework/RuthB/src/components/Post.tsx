import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faHeart,
  faPaperPlane,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import React, { FC } from "react";
import "./post.scss"

interface PostPrompt {
  post: Post;
  user: User|null;
  comments ?: CommentType[];
}

const Post: FC<PostPrompt> = ({ post, user, comments }) => {
  return (
    <div className="postDiv">
      <div className="headPost">
        <div className="userInfo">
          <img
            className="profileImg"
            src="https://picsum.photos/100/100"
            alt="randomPic"
          />
          <div className="userNameEndTime">
            <h3 className="userName">{user?.firstName + " " + user?.lastName}</h3>
            <span className="publishedTime">2 hours ago </span>
          </div>
        </div>
        <div className="3PointsIcon">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
      <div className="postBody">
        <p className="title">{post.title} {post.tags.map(tag => <a href="#">#{tag} </a>)}</p>
        <img src="https://picsum.photos/200/300" alt="randomPic" />
      </div>
      <div className="bottomPost">
        <div className="leftSide">
          <FontAwesomeIcon icon={faHeart} style={{color: 'red'}}/>
          <span>{post.reactions}</span>
          <FontAwesomeIcon icon={faComment} />
          {/* <span>{comments?.length}</span> */}
          <FontAwesomeIcon icon={faShare} />
        </div>
        <div className="rightSide">
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};

export default Post;
