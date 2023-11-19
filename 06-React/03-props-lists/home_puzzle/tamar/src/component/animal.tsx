import React, { FC } from 'react'
import BgColor from './bgcolor';

interface AnimalCard {
    type: string;
    name: string;
    age: number;
}

const Animal: FC<AnimalCard> = ({type, name, age}) => {
  return (
    <div style={{backgroundColor: `${BgColor({type})}`}}>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h3>{age}</h3>
    </div>
  )
}

export default Animal
