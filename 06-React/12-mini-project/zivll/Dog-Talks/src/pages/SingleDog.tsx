import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SingleDog = ({ breedName }) => {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`);
                setImageUrl(response.data.message);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();
    }, []);
    const handleSubmit = () => { }
    return (
        <div className='single-dog'>

            <h2 className='single-dog_title'>{breedName}</h2>
            {imageUrl ? (
                <img src={imageUrl} alt="" className='single-dog_img' />
            ) : (
                <img src="https://dog.ceo/api/breeds/image/random" alt="" className='single-dog_img' />
            )}

            <div className='chat'>
                <header>    &nbsp;&nbsp;&nbsp;Chat</header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" id="chat-text" placeholder='type your message here' />
                    <input type="submit" value="SEND" style={{ backgroundColor: "#1B70D5", color: "#fff", borderRadius: "5px", border: "none", padding: "5px 10px" }} />
                </form>
            </div>
        </div>
    )
}

export default SingleDog