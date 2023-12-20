import DogCard from "./DogCard"
import ChatBox from './ChatBox'
import '../style/chatBox.css'
import 'stream-chat-react/dist/css/v2/index.css';
import { useParams } from 'react-router-dom';
import { Dog } from './DogsPage';
import { getDogBreed } from './../api/dogsApi';
import { useState } from "react";

const DogPge = () => {
    const [dogBreed, setBreed] = useState('')
    const [dataDog, setDataDog] = useState<Dog>()
    let { breed } = useParams()
    if (breed == undefined) throw new Error("the breed in DogPge is undefined!");
    setBreed(breed)

    const specificDog = async () => {
        const data: Dog = await getDogBreed(dogBreed) //get the message & status of the dog
        if (!data) throw new Error("no dog data");
        data.breed = dogBreed
        console.log(data)
        setDataDog(data)
        // return data
    }

    return (
        <div>
            <DogCard key={breed} dog={dataDog} />
            <ChatBox />
        </div>
    )
}

export default DogPge
