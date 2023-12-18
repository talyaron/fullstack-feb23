import { useEffect, useState } from "react"
import { getDogBreed } from "../api/dogsApi"
import DogCard from "./DogCard";

const dogBreeds: string[] = [
    "affenpinscher",
    "dachshund",
    "redbone",
    "shiba",
    "stbernard"
];

export interface Dog {
    message: string,
    status: string,
    breed: string,
}

export const dogArr: Dog[] = []

const DogsPage = () => {
    const [dogs, setDogs] = useState<Dog[]>([])

    const handleGetAllDogs = async () => {
        try {
            for (let i = 0; i < dogBreeds.length - 1; i++) {
                dogArr[i] = await getDogBreed(dogBreeds[i])
                dogArr[i].breed = dogBreeds[i]
            }
            setDogs(dogArr)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetAllDogs()
    }, [])

    return (
        <div>
            {dogs && dogs.length > 0 ?
                (dogs.map((dog) => {
                    return <DogCard key={dog.breed} dog={dog} />;
                })) : (
                    <p>no dog</p>
                )}
        </div>
    )
}

export default DogsPage
