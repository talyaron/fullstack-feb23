function getUsers() {
    try {
        //get users from locastorage (string)
        var usersString = localStorage.getItem("users");
        if (!usersString)
            return [];
        //convert string to array of objects
        var usersArray = JSON.parse(usersString);
        //convert array of objects to array of users
        var users = usersArray.map(function (user) {
            return new User(user.name);
        });
        return users;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
