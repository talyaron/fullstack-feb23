// Welcome.tsx
import { useState } from 'react';

const Welcome = () => {
  const [blogText, setBlogText] = useState('');

  const handleCreateBlog = () => {
    console.log(`Blog created: ${blogText}`);
  };

  const username = localStorage.getItem('username') || 'Guest';

  return (
    <div>
      <h1>Welcome {username}</h1>
      <label>
        Create Blog Post:
        <input type="text" value={blogText} onChange={(e) => setBlogText(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateBlog}>Create Blog</button>
    </div>
  );
};

export default Welcome;
