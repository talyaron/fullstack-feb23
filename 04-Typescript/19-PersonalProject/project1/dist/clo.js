var foodForm = document.querySelector('form');
var foodList = document.getElementById('food-list');
var caloriesTotal = document.getElementById('calories-total');
foodForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var foodInput = document.getElementById('food');
    var caloriesInput = document.getElementById('calories');
    var food = foodInput.value;
    var calories = parseInt(caloriesInput.value);
    var foodItem = {
        food: food,
        calories: calories
    };
    addFoodItem(foodItem);
    updateTotalCalories();
    foodInput.value = '';
    caloriesInput.value = '';
});
function addFoodItem(foodItem) {
    var listItem = document.createElement('div');
    listItem.classList.add('food-item');
    var foodName = document.createElement('span');
    foodName.textContent = foodItem.food;
    var calories = document.createElement('span');
    calories.textContent = foodItem.calories + " \u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA";
    listItem.appendChild(foodName);
    listItem.appendChild(calories);
    foodList.appendChild(listItem);
    saveFoodItem(foodItem);
}
function saveFoodItem(foodItem) {
    var savedFoods = JSON.parse(localStorage.getItem('foods')) || [];
    savedFoods.push(foodItem);
    localStorage.setItem('foods', JSON.stringify(savedFoods));
}
function updateTotalCalories() {
    var savedFoods = JSON.parse(localStorage.getItem('foods')) || [];
    var totalCalories = savedFoods.reduce(function (total, food) { return total + food.calories; }, 0);
    caloriesTotal.textContent = totalCalories;
}
function clearLocalStorage() {
    localStorage.removeItem('foods');
}
// Clear local storage on page load
clearLocalStorage();
