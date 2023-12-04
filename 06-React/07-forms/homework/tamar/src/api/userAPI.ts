
const API_USER_URL = 'https://dummyjson.com/auth/login';

export const getLoginUser = async (username: string, password: string) => {
    try {
        const response = await
            fetch(`${API_USER_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: `${username}`,
                    password: `${password}`,
                })
            })
                .then(res => res.json())
                .then(console.log);
        return response
    } catch (error) {
        console.error(error)
    }
}