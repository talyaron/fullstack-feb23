import React, { useEffect, useState } from "react";
import { getPosts, Post } from "../api/postsApi";
import "./postsUI.scss";

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
    <div className="posts">
      <div className="post">
        {posts.length > 0 ? (
          randomPost ? (
            <div>
              <img
                id="profilePic"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQ8GQresoV0UIGT4EOFQKcTXfTXk_g0OcFGBV3oK5xx3JbmYd8AvC7mZUrjJ0XjfJ3qk&usqp=CAU"
              ></img>
              <h3 className="userName">Jane Doe</h3>
              <p id="hour">3 hours ago</p>
              <p>
                {randomPost.title}. {randomPost.body}
              </p>
              <p id="hash">#sharing</p>
              <img src="https://picsum.photos/200/300"></img>
            </div>
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <p>No user's posts found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
