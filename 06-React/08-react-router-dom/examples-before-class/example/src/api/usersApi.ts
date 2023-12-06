export const getUserByID = async (id: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
