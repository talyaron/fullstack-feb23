import { FC } from "react";

interface DogCardProps {
    dog: Dog;
}

export interface Dog {
    message: string,
    status: string,
    breed: string,
}


const DogCard: FC<DogCardProps> = ({ dog }) => {

    return (
        <>
            <div className="dog-card">
                <img className="dogImg" src={dog.message} alt={dog.breed} />
                <h1>{dog.breed}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, in dicta ipsum fuga sint, eos excepturi nostrum velit dolorem non dolore illum delectus. Repellat, minus nihil. Sit vitae suscipit quia.</p>
            </div>

        </>
    )
}

export default DogCard;
