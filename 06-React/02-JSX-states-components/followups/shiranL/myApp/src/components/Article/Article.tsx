import React, { useState } from 'react';
import './Article.scss';

const Article = ({ title, content, imgSrc,id }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className='card'>
      {imgSrc && <img id='card-img-top' src={imgSrc} alt='Article Image' />}
      <h1 className='card-title'>{title}</h1>
      <p className='card-text'>{content}</p>
      <button className='btn btn-primary' onClick={handleButtonClick}>
       Read More
      </button>
      <p>Readers: {clickCount}</p>  
    </div>
  );
}

export default Article;
