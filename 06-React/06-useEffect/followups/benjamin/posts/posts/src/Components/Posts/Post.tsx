import { FC } from "react";
import Card from "react-bootstrap/Card";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  username: string;
  university:string;
}

const Post: FC<PostProps> = ({userId, id, title, body, username,university }) => {
  return (
    <div className="post antialiased transition-all">
      <Card>
        <Card.Header className=" italic">{username} from <span className=" text-blue-400 antialiased">{university}</span></Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
