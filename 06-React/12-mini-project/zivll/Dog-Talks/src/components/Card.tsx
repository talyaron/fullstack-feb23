import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({ title }: { title: string }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://dog.ceo/api/breed/${title}/images/random`);
                setImageUrl(response.data.message);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();
    }, [title]);

    return (
        <a href={`/${title}`} className='card' >
            {imageUrl ? (
                <img src={imageUrl} alt="" className='card_img' />
            ) : (
                <img src="https://dog.ceo/api/breeds/image/random" alt="" className='card_img' />
            )}
            <h2 className='card_title'>{title}</h2>
            <p className='card_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis sit minus, autem ducimus eveniet, possimus suscipit dignissimos, sint deserunt illo quia veritatis sequi ut qui esse et. Eaque, nulla.</p>
        </a>
    );
};

export default Card;
