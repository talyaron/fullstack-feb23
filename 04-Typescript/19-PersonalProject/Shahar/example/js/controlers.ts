function getUsers(): User[] {

    try {
        //get users from locastorage (string)
        const usersString = localStorage.getItem("users");
        if (!usersString) return [];

        //convert string to array of objects
        const usersArray = JSON.parse(usersString);

        //convert array of objects to array of users
        const users: User[] = usersArray.map((user: User) => {
            return new User(user.name);
        })

        return users

    } catch (error) {
        console.error(error)
        return []
    }

};
