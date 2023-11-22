import { useState } from "react";
import "./App.css";
import { images } from "./util/images";
import ImageCard from "./components/ImageCard";

function App() {
  const [imagesArr, setImages] = useState<any[]>(images);

  const handleRemove = (ev) => {
    // const newArr = imagesArr.filter((image) => {
    //   if (image.id == ev.target.value){
    //     return
    //   } else {
    //     return image
    //   }
    // })

    // setImages(newArr)

    setImages(
      imagesArr.filter((image) => {
        return image.id != ev.target.value;
      })
    );
  };

  const handleUpdate = (ev) => {
    const newTitle = prompt("Enter new Title");
    setImages(
      imagesArr.map((image) => {
        if (image.id == ev.target.value) {
          return { ...image, title: newTitle };
        } else {
          return image;
        }
      })
    );
  };

  return (
    <div>
      {/* {imagesArr.map((image, idx) => {
        return (
          <div key={image.id}>
            {idx}
            <h5>{image.title}</h5>
            <img src={image.url} alt={image.title} />
            <button onClick={handleRemove} value={image.id}>DELETE</button>
            <button onClick={handleUpdate} value={image.id}>UPDATE</button>
          </div>
        );
      })} */}
      {imagesArr.map((image) => {
        return (
          <ImageCard
            key={image.id}
            image={image}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </div>
  );
}

export default App;
