import axios from 'axios';

const fetchBreedsList = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const breedsList = Object.keys(response.data.message);
    return breedsList;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchBreedsList;
