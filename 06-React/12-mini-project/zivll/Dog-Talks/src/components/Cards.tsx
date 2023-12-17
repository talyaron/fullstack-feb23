import { useState } from 'react'
import Card from './Card'
import { getAllDogsBreeds } from '../api/getDogs'
interface Breed {
    name: string
}
const Cards = () => {
    const [allBreeds, setAllBreeds] = useState([])
    getAllDogsBreeds(allBreeds, setAllBreeds)
    // console.log(allBreeds)
    return (
        <div className='cards'>
            {allBreeds ? allBreeds.map((breed: Breed) => { return (<Card title={breed.name} />) }) : <p>notging here</p>}

            hi
        </div>
    )
}

export default Cards