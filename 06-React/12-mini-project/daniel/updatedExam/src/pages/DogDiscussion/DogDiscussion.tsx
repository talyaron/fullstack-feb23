import { useParams } from "react-router-dom";
import { getBreedImage } from "../../api/dogApi";
import { useEffect, useState } from "react";

const DogDiscussion = () => {
  const { breedName } = useParams<{ breedName:string }>();
  const [breedImg, setBreedImg] = useState<string | null>(null);
  
  const fetchBreedImg = async () =>{
    try {
      if(breedName){
        const data = await getBreedImage(breedName);
        const breedImg = data.message;
        setBreedImg(breedImg)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchBreedImg()
  },[breedName]);

  return (
    <div>
      <h2>{breedName} Discussion</h2>
      {breedImg && <img src={breedImg} alt={breedName || 'Breed Image'} />}
    </div>
  )
}

export default DogDiscussion