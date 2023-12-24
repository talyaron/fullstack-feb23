import { useParams } from "react-router-dom";
import { getBreedImage } from "../../api/dogApi";
import { useEffect, useState } from "react";
import TopBar from "../../components/appBar/TopBar";

const DogDiscussion = () => {
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
      <TopBar />
      <h2>{breedName}</h2>
      <div style={{ display: 'flex', gap: '2%', height: '700px', width: '1200px' }}>
        {breedImg && (
          <div style={{ flex: '0 0 73%', height: '100%' }}>
            <img src={breedImg} alt={breedName || 'Breed Image'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        <div style={{ flex: '0 0 25%', height: '100%', border: '1.5px solid gray', borderRadius: '9px' }}>
          <h6 style={{ backgroundColor: 'beige', margin: 0, padding: '2px', borderRadius: '9px 9px 0px 0px' }}>Chat</h6>
          <p>{message}</p>
          <div>
            <input style={{padding:'2px'}} type="text" placeholder="Type your message here" onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogDiscussion