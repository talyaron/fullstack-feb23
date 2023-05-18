// task one
const userGender :string | null = prompt("what's your gender?");

const hello = (gender :string | null) => {
    return `You are a ${gender}`;
}

document.write(hello(userGender));