import axios from "axios"

const API_URL = "https://dog.ceo/api"

export const getAllDogs = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/breeds/list/all`)
        const dogArr = Object.keys(data.message);
        const images = await Promise.all(
            dogArr.map((breed) => getBreedImage(breed))
        )
        return images
    } catch (error) {
        console.error(error)
    }


}

export const getBreedImage = async (breed: any) => {
    try {
        const { data } = await axios.get(`${API_URL}/breed/${breed}/images/random`)
        const { message } = data
        return { breed, src: message }
    } catch (error) {
        console.error(error)
    }
}


// async function getdog() {
//     const { data } = await axios.get(`https://dog.ceo/api/breeds/list/all`)
//     console.log(data.message)
//     const arr = Object.keys(data.message)
//     setDogList(arr)
//   