import React from "react";
import Header from "../../header/Header";
import "./home.css";

interface HomeProps {
  player?: {
    classes: string[];
  };
}

function getClassImage(className: string): string | undefined {
  switch (className.toLowerCase()) {
    case "warrior":
      return "https://legacy-wow.com/images/default/warrior.jpg";
    case "druid":
      return "https://overgear.com/guides/wp-content/uploads/2023/09/druid-leveling-in-hardcore-wow.webp";
    case "warlock":
      return "https://overgear.com/guides/wp-content/uploads/2023/10/leveling-of-warlock-hardcore-wow.jpg";
    case "shaman":
      return "https://wow.zamimg.com/uploads/screenshots/normal/177064-shaman-thrall-part-of-the-battlecry-anniversary-wallpaper-by-wei-wang.jpg";
    case "death knight":
      return "https://cdn.mos.cms.futurecdn.net/49ZNsHdU3FawFUzkWbEUP.jpg";
    case "hunter":
      return "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/09/Hunter-cover.jpg";
    case "mage":
      return "https://mmo-gs.com/wp-content/uploads/2019/06/magee.jpg";
    case "paladin":
      return "https://classichardcore.com/wp-content/uploads/2023/06/paladin_wallpaper-1024x574.webp";
    case "priest":
      return "https://mmo-gs.com/wp-content/uploads/2019/06/priest.jpg";
    case "rogue":
      return "https://static.icy-veins.com/images/classic/og-images/rogue.jpg";
    case "demon hunter":
      return "https://vkplay.ru/hotbox/content_files/article/2021/05/31/3f746a096ecb40f09fd8f24e9c9cb2c1.jpg";
    case "whizbang":
      return "https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/GW2_EngineerWallpaper02-1920x1200.jpg";
    case "dream":
      return "https://artfiles.alphacoders.com/440/44025.jpg";
    case "neutral":
      return "https://i.ytimg.com/vi/VsqPm5nNYgo/maxresdefault.jpg";
    default:
      return undefined; 
  }
}

const Home: React.FC<HomeProps> = ({ player }) => {
  return (
    <div className="homepage">
      <Header />
      <h1>Choose Your Class</h1>
      {player && (
        <div className="class-container">
          {player.classes.map((className, index) => (
            <div key={index} className="class-item">
              <img src={getClassImage(className)} alt={className} />
              <p>{className}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
