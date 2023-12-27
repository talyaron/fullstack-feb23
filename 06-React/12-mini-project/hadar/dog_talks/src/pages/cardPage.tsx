import { useParams } from "react-router-dom";
import { getBreedImage } from "../../api/dogApi";
import { useEffect, useState } from "react";

const Discussion = () => {
  const { breedName } = useParams<{ breedName: string }>();
  const [breedImg, setBreedImg] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  const fetchBreedImg = async () => {
    try {
      if (breedName) {
        const data = await getBreedImage(breedName);
        const breedImg = data.message;
        setBreedImg(breedImg)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(ev.target.value)
  }
  useEffect(() => {
    fetchBreedImg()
  }, [breedName]);

  return (
    <div>
      <h1>{breedName}</h1>
      <div>
          <div>
            <img src={breedImg}/>
          </div>
        <div>
          <h2>Chat</h2>
          <p>{message}</p>
          <div>
            <input type="text" placeholder="Type your message here" onChange={handleInputChange} />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussion