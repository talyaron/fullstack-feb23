// create an app for storing your friends name, email, phone number and instegram account.
interface Friend {
    name: string;
    email: string;
    phone: number;
    insta: string;
    id?: number;
}

async function handleForm(event: any) {
    debugger;
    try {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const insta = event.target.insta.value;
        if (!name || !email || !phone || !insta) {
            throw new Error("Please complete all fields")
        }
        const friend: Friend = { name, email, phone, insta };

        const response = await fetch("/API/add-friend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friend),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}