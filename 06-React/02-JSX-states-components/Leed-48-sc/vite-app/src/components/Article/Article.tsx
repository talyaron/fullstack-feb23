import React from 'react';

const Article = ({ title, content, imgSrc }) => {
  return (
    <div className='card'>
      {imgSrc && <img src={imgSrc} alt='Article Image' />}
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Article;
