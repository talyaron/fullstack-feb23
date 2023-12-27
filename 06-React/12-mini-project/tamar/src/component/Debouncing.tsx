import { useEffect, useState } from "react";
import { dogArr } from "./DogsPage";
import DogCard from "./DogCard";
import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router'

export interface Dog {
    message: string,
    status: string,
    breed: string,
}


const Debouncing = ({ setFilterDogs, dogs }: any) => {
    const [text, setText] = useState('')
    // const [dogs, setDogs] = useState(dogArr)
    // const [filterDogs, setFilterDogs] = useState(dogs)

    const handleFilterArr = () => {
        if (!text) {
            setFilterDogs(dogs)
        } else {

            setFilterDogs(dogs.filter((dog) => dog.breed.includes(text)))  //the search engin in the dogsBreeds 
        }
    }

    useEffect(() => {
        const request = setTimeout(handleFilterArr, 2000)
        return () => clearTimeout(request)
    }, [text])  //only after a pauza in writing the search will start

    return (
        <div>
            <input type="text" value={text} onInput={(ev) => setText((ev.target as HTMLInputElement).value)} placeholder="search by breed" />
            <br></br>
            {/* {
                text != '' ?
                    <div>
                        {filterDogs.map((dog) => {
                            return <DogCard key={dog.breed} dog={dog} />
                        })}
                    </div> :
                    null
            } */}
        </div >
    )
}

export default Debouncing
