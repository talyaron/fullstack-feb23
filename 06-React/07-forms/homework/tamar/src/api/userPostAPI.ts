
export const getUserPosts = async (userID: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/user/${userID}`)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}