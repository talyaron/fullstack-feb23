import { FC } from "react";
import '../style/dogCard.css';
import { Link, useParams } from "react-router-dom";

interface DogCardProps {
    dog: Dog | und;
}

export interface Dog {
    message: string,
    status: string,
    breed: string,
}

const DogCard: FC<DogCardProps> = ({ dog }) => {

    const foucusBreed = () => {
        <Link to="/dog"></Link>
    }

    return (
        <>
            <div className="dog-card" onClick={foucusBreed}>
                <h1>{dog.breed}</h1>
                <img className="dogImg" src={dog.message} alt={dog.breed} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, in dicta ipsum fuga sint, eos excepturi nostrum velit dolorem non dolore illum delectus. Repellat, minus nihil. Sit vitae suscipit quia.</p>
            </div>

        </>
    )
}

export default DogCard;
