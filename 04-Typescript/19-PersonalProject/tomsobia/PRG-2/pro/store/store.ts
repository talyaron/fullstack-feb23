const root = document.querySelector("#root");
const Detailsstring = localStorage.getItem("user");
const details = Detailsstring ? JSON.parse(Detailsstring) : { name: "" };

try {
  if (root) {
    root.innerHTML = `Hello ${details.name}`;
  }

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });
} catch (error) {
  console.error("An error occurred:", error);
}

function addToCart(event) {
  try {
    const product = event.target.getAttribute("data-product");
    alert(`המוצר ${product} נוסף לסל הקניות`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
