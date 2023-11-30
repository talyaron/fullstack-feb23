// Home.tsx
import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

interface HomeProps {
  player?: {
    classes: string[];

  };
  games?: {
    title: string[];
  };
 
}

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  profile_url: string;
}

function getClassImages(
  className: string
): { front: string; bg: string } | undefined {
  switch (className.toLowerCase()) {
    case "warrior":
      return {
        front:
          "https://banner2.cleanpng.com/20180506/hyq/kisspng-world-of-warcraft-legion-warrior-video-game-orc-5aefb9ea471e65.5433892715256601382913.jpg",
        bg: "https://i.redd.it/8lgy2qp5ee1b1.jpg",
      };
    case "druid":
      return {
        front:
          "https://overgear.com/guides/wp-content/uploads/2023/09/druid-leveling-in-hardcore-wow.webp",
        bg: "https://i.redd.it/zqqih90knava1.jpg",
      };
    case "hunter":
      return {
        front:
          "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/09/Hunter-cover.jpg",
        bg: "https://cdn.mos.cms.futurecdn.net/mC7MyC26DuUUJpCtuxmD8Q.jpg",
      };
    case "death knight":
      return {
        front: "https://cdn.mos.cms.futurecdn.net/49ZNsHdU3FawFUzkWbEUP.jpg",
        bg: "https://www.techrepublic.com/wp-content/uploads/2008/11/248695.jpg",
      };
    case "shaman":
      return {
        front:
          "https://wow.zamimg.com/uploads/screenshots/normal/177064-shaman-thrall-part-of-the-battlecry-anniversary-wallpaper-by-wei-wang.jpg",
        bg: "https://i1.sndcdn.com/artworks-000438189804-8735jh-t500x500.jpg",
      };
    case "warlock":
      return {
        front:
          "https://overgear.com/guides/wp-content/uploads/2023/10/leveling-of-warlock-hardcore-wow.jpg",
        bg: "https://cdna.artstation.com/p/assets/images/images/016/838/646/large/elizanel-suhoveeva-siege-of-lordaeron-by-elizanel-dcmi4b7.jpg?1553666197",
      };
    case "mage":
      return {
        front: "https://mmo-gs.com/wp-content/uploads/2019/06/magee.jpg",
        bg: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9etnqdt0184qmov7kaxpml3/public",
      };
    case "paladin":
      return {
        front:
          "https://classichardcore.com/wp-content/uploads/2023/06/paladin_wallpaper-1024x574.webp",
        bg: "https://i.pinimg.com/736x/dd/ea/d1/ddead1b17ab10503d5865a9977ebdb0a.jpg",
      };
    case "priest":
      return {
        front: "https://mmo-gs.com/wp-content/uploads/2019/06/priest.jpg",
        bg: "https://i.pinimg.com/474x/39/90/a8/3990a8add08e7d278bfc8dd12d8950de.jpg",
      };
    case "rogue":
      return {
        front:
          "https://static.icy-veins.com/images/classic/og-images/rogue.jpg",
        bg: "https://w0.peakpx.com/wallpaper/272/677/HD-wallpaper-worgen-classes-town-worgen-warlock-cataclysm-moon-warrior-wow-feral-hunter-night-rogue.jpg",
      };
    case "demon hunter":
      return {
        front: "https://vkplay.ru/hotbox/content_files/article/2021/05/31/3f746a096ecb40f09fd8f24e9c9cb2c1.jpg",
        bg: "https://c4.wallpaperflare.com/wallpaper/326/202/448/world-of-warcraft-horde-undercity-hd-wallpaper-preview.jpg",
      };
    case "whizbang":
      return {
        front:
          "https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/GW2_EngineerWallpaper02-1920x1200.jpg",
        bg: "https://www.writeups.org/wp-content/uploads/Pixxel-Guild-Wars-2-Rata-Sum-splash-screen-header.jpg",
      };
    case "dream":
      return {
        front: "https://artfiles.alphacoders.com/440/44025.jpg",
        bg: "https://c4.wallpaperflare.com/wallpaper/728/185/178/artwork-guild-wars-2-gw2-video-games-guild-wars-hd-art-wallpaper-preview.jpg",
      };
    case "neutral":
      return {
        front:
          "https://i.ytimg.com/vi/VsqPm5nNYgo/maxresdefault.jpg",
        bg: "https://cdn.wallpapersafari.com/51/97/qjzm6e.jpg",
      };
    default:
      return undefined;
  }
}


const Home: React.FC<HomeProps> = ({ player }) => {
  const [games, setGames] = useState<Game[] | undefined>(undefined);

  useEffect(() => {
    const fetchGames = async () => {
      const url = "https://mmo-games.p.rapidapi.com/games";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff1f21c3b7msh1bb39960c2b03c2p113978jsn0af2f0704a2d",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setGames(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      <h1>Choose Your Class</h1>
      {player && (
        <div className="class-container">
          {player.classes.map((className, index) => {
            const classImages = getClassImages(className);
            return (
              classImages && (
                <div key={index} className="class-item">
                  <img
                    src={classImages.front}
                    alt={`${className} front`}
                    className="front-image"
                  />
                  <img
                    src={classImages.bg}
                    alt={`${className} background`}
                    className="bg-image"
                  />
                  <h3>{className}</h3>
                </div>
              )
            );
          })}
        </div>
      )}
      {games && (
        <div className="games-list">
          {games.map((game) => (
            
            <div key={game.id} className="game-item">
              <img src={game.thumbnail} alt={game.title} />
              <h3>{game.title}</h3>
              <p>{game.short_description}</p>
              <p>Genre: {game.genre}</p>
              <p>Platform: {game.platform}</p>
              <p>Publisher: {game.publisher}</p>
              <p>Developer: {game.developer}</p>
              <p>Release Date: {game.release_date}</p>
              <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                Play Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
