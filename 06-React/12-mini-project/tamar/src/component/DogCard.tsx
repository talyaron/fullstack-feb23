import { FC } from "react";
import { getDogBreed } from './../api/dogsApi';

interface DogCardProps {
    dog: Dog;
}

export interface Dog {
    img: string,
    name: string,
    description: string,
}

const DogCard: FC<DogCardProps> = async (dogBreed) => {

    const dog = await getDogBreed(`${dogBreed}`)
    console.log(dog)
    if (!dog) throw new Error("no dog found");

    //!11-review example 

    return (
        <div className="dog-card">
            <img className="dogImg" src={dog.massage[0]} alt="" />
        </div>
    )
}
