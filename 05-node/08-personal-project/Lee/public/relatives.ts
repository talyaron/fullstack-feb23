enum RelationshipType {
  choose = "Choose",
  mother = "Mother",
  father = "Father",
  brother = "Brother",
  sister = "Sister",
  sibling = "Sibling",
  granddaughter = "Granddaughter",
  grandson = "Grandson",
  uncle = "Uncle",
  aunt = "Aunt",
  cousin = "Cousin",
  niece = "Niece",
  nephew = "Nephew",
  other = "other"
}

interface Relative {
  id: string;
  fullName: string;
  birthDate: string;
  country: string;
  relationship: RelationshipType;
}

// Function to get user's relatives from the server
async function getRelativesFromServer(email: string) {
  try {
    const response = await fetch(`/API/users/get-user-relatives?email=${email}`);
    const data = await response.json();
    return data.relatives;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Render relatives to the screen
async function handleGetRelatives() {
  try {
    const email = getEmailFromQuery();
    if (!email) throw new Error("No email");
    const relatives = await getRelativesFromServer(email);
    console.log(relatives);
    renderRelatives(relatives, document.querySelector("#relatives"));
  } catch (error) {
    console.error(error);
  }
}

// Function to add a relative for a user
async function handleAddRelative(ev: any) {
  try {
      ev.preventDefault();

      const email = getEmailFromQuery();
      if (!email) throw new Error("No email");

      const fullName = ev.target.elements.fullName.value;
      const birthDate = ev.target.elements.birthDate.value;
      const country = ev.target.elements.country.value;

      if (!fullName || !birthDate || !country) {
          throw new Error("Please complete all fields");
      }

      // Associate the new relative with the user by using their email.
      const newRelative = { fullName, birthDate, country };
      console.log(newRelative);

      const response = await fetch('/API/users/add-user-relative', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRelative),
      });

      const { relatives } = await response.json();
      console.log(relatives);

      renderRelatives(relatives, document.querySelector("#relatives"));
  } catch (error) {
      console.error(error);
  }
}


// // Replace this function with the one you have in your main.ts
function getEmailFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('email');
}