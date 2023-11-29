export const getAllUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
