import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";

function App() {

  //classes list
  const [player, setPlayer] = useState<{ classes: string[] } | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff1f21c3b7msh1bb39960c2b03c2p113978jsn0af2f0704a2d",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setPlayer(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //free games list
  const [games, setGames] = useState<{ title: string[] } | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchGames = async () => {
  const url = 'https://mmo-games.p.rapidapi.com/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ff1f21c3b7msh1bb39960c2b03c2p113978jsn0af2f0704a2d',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setGames(result);
  } catch (error) {
    console.error(error);
  }
};
fetchGames();
}, []);

  return (
    <>
      <TopBar />
      <Home player={player} games={games}/>
    </>
  );
}

export default App;
