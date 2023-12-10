import axios from 'axios';
import { useEffect, useState } from 'react';

export const fetchUserPosts = async (user: User | null) => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/user/${user?.id}`);

    if (response.status === 200) {
      return response.data.posts; 
    } else {
      console.error('Failed to fetch user posts');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const Post = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const userFromStorage = sessionStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    } else {
      throw new Error("no user at storage");
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserPostsAndUpdateState();
    }
  }, [user]);

  const fetchUserPostsAndUpdateState = async () => {
    const userPosts = await fetchUserPosts(user);
    if (userPosts !== null) {
      setPosts(userPosts.posts);
    }
  };
};

