import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  const [notices, setNotices] = useState();
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const data = await fetch(`https://dog.ceo/api/breeds/image/random`).then(
        (res) => res.json()
      );
      setNotices(data._embedded.notices);
      setLoading(false);
    }
  }, [search]);

  return (
    <div className="App">
      <AppRouter />
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {JSON.stringify(notices)}
    </div>
  );
}

export default App;
