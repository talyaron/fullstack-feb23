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
      <h1 style={{margin: 0}}>{breedName}</h1>
      <div style={{ display: 'flex', gap: '2%', height: '700px', width: '1200px' }}>
        {breedImg && (
          <div style={{ flex: '0 0 73%', height: '100%' }}>
            <img src={breedImg} alt={breedName || 'Breed Image'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        <div style={{ position: 'relative', flex: '0 0 25%', height: '100%', border: '1.5px solid gray', borderRadius: '9px' }}>
          <h6 style={{ backgroundColor: 'beige', margin: 0, padding: '4px', borderRadius: '9px 9px 0px 0px' }}>Chat</h6>
          <p>{message}</p>
          <div style={{ position: 'absolute', bottom: 10, width: '100%', display: 'flex', justifyContent: ' space-evenly', alignItems: 'flex-end' }}>
            <input style={{ width: '80%', height: '22px', padding: '2px', borderRadius: '4px', border: '1px solid gray' }} type="text" placeholder="Type your message here" onChange={handleInputChange} />
            <button style={{ backgroundColor: '#1976d2', height: '30px', color: 'white', padding: '1px' }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogDiscussion