import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Mainbar.scss';

const Mainbar = ({ title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = title.split('');
    const coloredTitle = letters
      .map((letter, index) => `<span style="color: ${getRandomColor()}">${letter}</span>`)
      .join('');
    
    titleRef.current.innerHTML = coloredTitle;
  }, [title]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='bar'>
      <div className="icons">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faSignInAlt} />
      </div>
      <p className="title" ref={titleRef}></p>
    </div>
  );
}

export default Mainbar;
