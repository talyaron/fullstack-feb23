import { useState } from "react";
import "./App.css";
import { images } from "./util/images";

function App() {
  const [imagesArr, setImages] = useState(images);

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
  }


  return (
    <div>
      {imagesArr.map((image, idx) => {
        return (
          <div key={image.id}>
            {idx}
            <h5>{image.title}</h5>
            <img src={image.url} alt={image.title} />
            <button onClick={handleRemove} value={image.id}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
