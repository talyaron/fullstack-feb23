import axios from "axios";

export const getAllRecipesFetch = async () => {
    try {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(console.log);
    } catch (error) {
        console.error(error)
        return error
    }
}
export const getAllRecipesAxios = async () => {
    try {
        const {data} = await axios.get('https://dummyjson.com/recipes')
        return data
    } catch (error) {
        console.error(error)
        return error
    }
}