import React, { useEffect, useState } from "react";
import { getPosts, Post } from "../api/postsApi";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [randomPost, setRandomPost] = useState<Post | null>(null);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (userId) {
          const response = await getPosts(userId);

          console.log("API Response:", response);

          if ("posts" in response.data) {
            setPosts(response.data.posts as Post[]);

            const randomIndex = Math.floor(
              Math.random() * (response.data.posts as Post[]).length
            );
            setRandomPost((response.data.posts as Post[])[randomIndex]);
          } else {
            console.error("Unexpected data structure in API response");
          }
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2>Lee's Feed</h2>
      {posts.length > 0 ? (
        randomPost ? (
          <div>
            <h3>{randomPost.title}</h3>
            <p>{randomPost.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>No user's posts found</p>
      )}
    </div>
  );
};

export default Posts;
