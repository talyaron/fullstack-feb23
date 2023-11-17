// 2. create a animal card component, animal should have type (cat, dog etc), name and age, color the background of the component by the type of the animal (cat = purple, dog = blue, etc);

import React, { FC } from 'react'
import { animals } from '../../utilities/animals'

interface AnimalCardProps {
    type: string,
    name: string,
    age: number,

}

const AnimalCard: FC<AnimalCardProps> = ({ type, name, age }) => {
    const animalFromArray = animals.find(animal => animal.type === type);
    return (
        <div style={{ backgroundColor: `${animalFromArray?.color}` }} className='animal-card'><h1>{name}</h1><p>{type}</p><p>{age}</p></div>
    )
}

export default AnimalCard