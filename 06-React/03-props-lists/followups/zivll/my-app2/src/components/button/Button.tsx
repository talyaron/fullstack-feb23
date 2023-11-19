import React, { FC, useState } from 'react'
import { animals } from '../../utilities/animals';
import AnimalCard, { AnimalCardProps } from '../animal-card/AnimalCard';
const Button: FC<AnimalCardProps> = ({ type, name, age }) => {

    // const [animal, setAnimal] = useState("")
    const changeAnimal = () => {

        const newAnimal = prompt("please choose a new animal")
        if (!newAnimal || newAnimal === null) alert("Please choose a new animal");
        // setAnimal(newAnimal);
        const animalFromArray = animals.find(animal => animal.type === newAnimal);
        if (!animalFromArray || !animalFromArray === undefined) alert("Please"); else
            <AnimalCard key={animalFromArray.name} type={animalFromArray.type} name={animalFromArray.name} age={animalFromArray.age} />

    }

    return (
        <button onClick={changeAnimal}>change animal</button>
    )
}

export default Button