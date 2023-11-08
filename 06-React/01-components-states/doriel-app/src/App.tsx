import React, { useState } from 'react';
import './App.css';

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const addBlog = () => {
    const newBlog: Blog = {
      id: blogs.length + 1,
      title: 'Blog Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://assets.fortnitecreativehq.com/wp-content/uploads/2020/11/24084718/7153-0441-1172.jpg',
    };
    setBlogs([...blogs, newBlog]);

    setBackgroundColor(getRandomColor());
  };

  const removeBlog = () => {
    if (blogs.length > 0) {
      const updatedBlogs = [...blogs];
      updatedBlogs.pop();
      setBlogs(updatedBlogs);
    }
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Welcome to GamesEngines Forum</h1>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <img src={blog.image} alt="Blog" />
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={addBlog}>Add Blog</button>
        <button onClick={removeBlog}>Remove Blog</button>
      </div>
    </div>
  );
}

export default App;
