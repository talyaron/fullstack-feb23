import React, { useState, FC, useEffect } from "react";
import { handlePostByUSer } from "../api/posts";
import Post from "./Post";
import { getUserById } from "../api/users";

interface PostsListProps {
  userId: number;
}

const PostsList: FC<PostsListProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResult = await getUserById(userId);
        const postsResult = await handlePostByUSer(userId);

        console.log(postsResult);
        console.log(userResult);

        setUser(userResult);
        setPosts(postsResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  console.log(posts);
  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} user={user}></Post>
      ))}
    </div>
  );
};

export default PostsList;
