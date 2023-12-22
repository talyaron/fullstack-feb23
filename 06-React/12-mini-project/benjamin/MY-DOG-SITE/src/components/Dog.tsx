import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface DogProps {
  name: string;
  img: string;
  dogPage: () => void;
}

const Dog: FC<DogProps> = ({ name, img, dogPage }) => {
  return (
    <div onClick={dogPage}>
      <Card
        isBlurred
        isHoverable
        className="cursor-pointer sm:w-64 lg:w-80 h-80 hover:bg-slate-400 transition-all ease-in-out"
      >
        <CardHeader>
          <p className="text-xl font-semibold">{name}</p>
        </CardHeader>
        <CardBody>
          <img className="w-full h-3/4" src={img} alt={name} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Dog;
