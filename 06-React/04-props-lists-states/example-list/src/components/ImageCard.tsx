import {FC} from "react";
import { Image } from "../types/types";

interface ImageCardProps {
  image: Image;
  handleUpdate: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRemove: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, handleRemove, handleUpdate }) => {
  return (
    <div key={image.id}>
      <h5>{image.title}</h5>
      <img src={image.url} alt={image.title} />
      <button onClick={handleRemove} value={image.id}>
        DELETE
      </button>
      <button onClick={handleUpdate} value={image.id}>
        UPDATE
      </button>
    </div>
  );
};

export default ImageCard;
