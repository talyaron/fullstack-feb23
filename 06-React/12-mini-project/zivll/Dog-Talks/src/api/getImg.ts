import axios from "axios";

export const getBreedImage = async () => {
  try {
    const getImage = await axios.get(
      "https://dog.ceo/api/breed/hound/images/random"
    );
    return getImage.toString();
  } catch (error) {
    console.error(error);
  }
};
