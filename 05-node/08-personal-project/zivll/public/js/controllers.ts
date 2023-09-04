// this function is used to handle accordion click
function handleAccordionClick() {
  const accordion = document.querySelectorAll(`.thead`);

  // this method will take care the accordion functionality
  accordion.forEach((head) => {
    // first we handling the fold and unfold functions
    head.addEventListener(`click`, (ev) => {
      head.classList.toggle(`active`);
      const svgRoot = head.childNodes[1];
      const createSvgDiv = document.createElement(`div`);
      if (!head.parentElement?.nextElementSibling)
        throw new Error(`next sibling not found`);
      const nextElementSibling = head.parentElement.nextElementSibling;
      if (!nextElementSibling) throw new Error(`nextElementSibling not found`);
      if (nextElementSibling.classList.contains(`off`)) {
        nextElementSibling.classList.remove(`off`);

        // second we handling the svg replacing (plus, minus)
        createSvgDiv.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="collapse-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18 12H6"
        />
      </svg>`;
        svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
      } else {
        nextElementSibling.classList.add(`off`);
        createSvgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="collapse-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>`;
        svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
      }
    });
  });
}

// this function gets categories from DB
async function getCategoriesFromDB(userName: string) {
  try {
    const response = await fetch(`/API/category/get-categories`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
