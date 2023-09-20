

function renderRelatives(relativesData, targetElement) {
    if (!relativesData || relativesData.length === 0) {
        targetElement.innerHTML = '<p>No relatives found.</p>';
        return;
    }

    const relativesList = document.createElement('ul');
     relativesList.style.listStyle = 'none';

    relativesData.forEach(relative => {
        const relativeItem = document.createElement('li');
        const boldFullName = document.createElement('span');
        boldFullName.style.fontWeight = 'bold';
        boldFullName.textContent = relative.fullName;

        const relationText = document.createElement('span');
        relationText.textContent = ` is my: `;

        const boldRelation = document.createElement('span');
        boldRelation.style.fontWeight = 'bold';
        boldRelation.textContent = relative.relation;

        // Split the birthDate into day, month, and year
        const birthDateParts = relative.birthDate.split('-');
        const birthDateDay = birthDateParts[2];
        const birthDateMonth = birthDateParts[1];
        const birthDateYear = birthDateParts[0];

        const birthDateText = document.createElement('span');
        birthDateText.textContent = ` - born in: `;

        const boldBirthDate = document.createElement('span');
        boldBirthDate.style.fontWeight = 'bold';
        boldBirthDate.textContent = `${birthDateDay}-${birthDateMonth}-${birthDateYear}`;

        const countryText = document.createElement('span');
        countryText.textContent = ` - lives in: `;

        const boldCountry = document.createElement('span');
        boldCountry.style.fontWeight = 'bold';
        boldCountry.textContent = relative.country;

        relativeItem.appendChild(boldFullName);
        relativeItem.appendChild(relationText);
        relativeItem.appendChild(boldRelation);
        relativeItem.appendChild(birthDateText);
        relativeItem.appendChild(boldBirthDate);
        relativeItem.appendChild(countryText);
        relativeItem.appendChild(boldCountry);
        relativesList.appendChild(relativeItem);
    });

    targetElement.innerHTML = ''; // Clear the target element
    targetElement.appendChild(relativesList);
}


// A function to get the user's relatives from the server by email
async function getUserRelatives(email: string) {
    try {
        const response = await fetch(`/API/relatives/get-users-relatives?email=${email}`);
        const data = await response.json();
        console.log(data);

        // Assuming you have a rendering function for relatives, e.g., renderRelatives
        renderRelatives(data.relatives, document.querySelector("#relatives"));
    } catch (error) {
        console.error(error);
    }
}



