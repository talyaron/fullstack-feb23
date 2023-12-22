import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const data = await fetch("https://dog.ceo/api/breeds/list/all").then(
        (res) => res.json()
      );

      const breeds = Object.keys(data.message);
      setDogBreeds(breeds);
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Filter dog breeds based on the search term
    const filtered =
      search && search.trim() !== ""
        ? dogBreeds.filter((breed) =>
            breed.toLowerCase().includes(search.toLowerCase())
          )
        : dogBreeds;

    setFilteredBreeds(filtered);
  }, [search, dogBreeds]);

  return (
    <div className="App">
      <AppRouter />
      {window.location.pathname === "/gallery" && (
        <>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <></>
            // <ul>
            //   {filteredBreeds.map((breed) => (
            //     <li key={breed}>{breed}</li>
            //   ))}
            // </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;
