
export const getUserPosts = async (userID: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/user/${userID}`)
            .then(res => res.json())
            .then(console.log);
        return response
    } catch (error) {
        console.error(error)
    }
}