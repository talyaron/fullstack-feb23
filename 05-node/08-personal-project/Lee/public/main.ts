

function renderRelatives(relativesData, targetElement) {
    if (!relativesData || relativesData.length === 0) {
        targetElement.innerHTML = '<p>No relatives found.</p>';
        return;
    }

    const relativesList = document.createElement('ul');
     relativesList.style.listStyle = 'none';

    relativesData.forEach(relative => {
        const relativeItem = document.createElement('li');
        relativeItem.textContent = `${relative.fullName} - ${relative.relation} - ${relative.birthDate} - ${relative.country}`;
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



