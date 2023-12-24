import { FC } from "react";

interface BreedItemProps {
  breed: Breed;
}

export interface Breed {
  id: number;
  title: string;
  img: string;
}

    const BreedItem: FC<BreedItemProps> = ({ breed }) => {
        return (
          <div className="breed-card">
      <h3 className="title">{breed.title}</h3>

          </div>
        );
      };

export default BreedItem;
