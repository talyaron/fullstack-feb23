import React from "react";
import { Link } from "react-router-dom";
import "../scss/hp.scss";

const Home: React.FC = () => {
  const dogBreeds = [
    { id: 1, name: "Bagle", image: "../src/imgs/dachshund.jpeg" },
    { id: 2, name: "Jango", image: "../src/imgs/jango.jpeg" },
  ];

  return (
    <div className="hp-container">
      <h1>Dog Breeds Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dogBreeds.map((breed) => (
          <div key={breed.id} className="dog-breed-card">
            <img
              src={breed.image}
              alt={breed.name}
              className="dog-breed-image"
            />
            <h3>{breed.name}</h3>
          </div>
        ))}
      </div>
      <Link to="/gallery">
        <button style={{ marginTop: "20px" }}>Go to Gallery</button>
      </Link>
    </div>
  );
};

export default Home;
