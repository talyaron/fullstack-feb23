import React, { FC } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: FC<PostProps> = ({id,title,body}) => {
  return <div className="post">
     <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>;
};

export default Post;
