const foodForm = document.querySelector("form");
const foodList = document.getElementById("food-list");
const caloriesTotal = document.getElementById("calories-total");

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const foodInput = document.getElementById("food");
  const caloriesInput = document.getElementById("calories");

  const food = foodInput.value;
  const calories = parseInt(caloriesInput.value);

  const foodItem = {
    food,
    calories,
  };

  addFoodItem(foodItem);
  updateTotalCalories();
  foodInput.value = "";
  caloriesInput.value = "";
});

function addFoodItem(foodItem) {
  const listItem = document.createElement("div");
  listItem.classList.add("food-item");

  const foodName = document.createElement("span");
  foodName.textContent = foodItem.food;

  const calories = document.createElement("span");
  calories.textContent = `${foodItem.calories} קלוריות`;

  listItem.appendChild(foodName);
  listItem.appendChild(calories);
  foodList.appendChild(listItem);

  saveFoodItem(foodItem);
}

function saveFoodItem(foodItem) {
  let savedFoods = JSON.parse(localStorage.getItem("foods")) || [];
  savedFoods.push(foodItem);
  localStorage.setItem("foods", JSON.stringify(savedFoods));
}

function updateTotalCalories() {
  let savedFoods = JSON.parse(localStorage.getItem("foods")) || [];
  const totalCalories = savedFoods.reduce(
    (total, food) => total + food.calories,
    0
  );
  caloriesTotal.textContent = totalCalories;
}

function clearLocalStorage() {
  localStorage.removeItem("foods");
}

// Clear local storage on page load
clearLocalStorage();
