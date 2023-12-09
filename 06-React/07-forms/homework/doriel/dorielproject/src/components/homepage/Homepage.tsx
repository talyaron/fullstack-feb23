// Homepage.tsx

import "./homepage.css";
import { useEffect, useState } from "react";

export const Homepage = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <div className="homepage-container">
      <h2>Homepage</h2>
      {username && <h4>Welcome, {username}!</h4>}
    </div>
  );
};
