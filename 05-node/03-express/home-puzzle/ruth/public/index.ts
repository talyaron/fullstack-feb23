//1--------------------------------------------------------
console.log("hello world");

async function handleName() {
  const response = await fetch("/name");
  const { name } = await response.json();
  document.querySelector("#root").innerHTML = name;
}
async function handleDes() {
  const response = await fetch("/descriptions");
  const { descriptions } = await response.json();
  document.querySelector("#rootDes").innerHTML = descriptions;
}

// handleName();
// handleDes();

//--2--------------------------------------------------------------------------------

//--3--------------------------------------------------------------------------------

const nameFromUser = window.prompt("enter name");

const postInit = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({nameFromUser}),
};

async function postNameFromUser() {
    console.log("in post name");
    
  const response = await fetch("/userPrompt", postInit);
  console.log(response);
  
  const { nameFromUser } = await response.json();
  document.querySelector("#rootDes").innerHTML = nameFromUser;
}

postNameFromUser()