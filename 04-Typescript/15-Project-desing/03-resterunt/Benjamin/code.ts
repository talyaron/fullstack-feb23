const tablesGrid = document.querySelector(".mainPageRoot__tablesGrid")
for (let i = 1; i <= 20; i++) {
    let tableHTML = `<button class="mainPageRoot__tablesGrid__table" onclick="redirectToSecondPage();identifier(${i})">${i}</button>`;
    if (tablesGrid) {
        tablesGrid.innerHTML += tableHTML
    }

}

function redirectToSecondPage() {
    window.location.href = "secondPage.html";
}
function redirectToThirdPage() {
    window.location.href = "newOrder.html";
}
function redirectTofirthPage() {
    window.location.href = "exsictOrder.html";
}
function redirectTofifthPage() {
    window.location.href = "bill.html";
}
function redirectToBevragesPage() {
    window.location.href = "beverage.html";
}
function redirectToFoodPage() {
    window.location.href = "food.html";
}
function redirectToDessertPage() {
    window.location.href = "dessert.html";
}
function identifier(i) {
    localStorage.setItem(`currentTable`, i)
}

const foodGrid = document.querySelector(".foodPageRoot__foodGrid")

class food {
    constructor(public dishName: string, public img: string, public DishId: number) { }
}
const foodsArr: food[] = [
    new food("עוף בתנור", "https://160cal.com/wp-content/uploads/2020/03/chicken-final1jpg.jpg", 1),
    new food("לאפת הבית", "https://happykitchen.co.il/wp-content/uploads/2023/04/%D7%9C%D7%90%D7%A4%D7%94-%D7%9E%D7%92%D7%95%D7%9C%D7%92%D7%9C%D7%AA.jpg", 2),
    new food("כרוב פיקנטי", "https://www.krutit.co.il/wp-content/uploads/2017/10/DSC_0013-764x512.jpg", 3),
    new food("בטטה בתנור", "https://www.foodik.co.il/Images/Site/Products/630.jpg", 4),
    new food("אוסובוקו", "https://img.mako.co.il/2008/03/13/01/kdeirat_egel_c.jpg", 5),
    new food("חביתת ירק", "https://cdn.goodlifetv.co.il/wp-content/uploads/2021/08/09185140/750-167.jpg", 6),
    new food("פסטה מוקרמת", "https://160cal.com/wp-content/uploads/2022/12/%D7%A4%D7%A1%D7%98%D7%94-%D7%A2%D7%9D-%D7%99%D7%A8%D7%A7%D7%95%D7%AA-860.jpg", 7),
    new food("פיצת הבית", "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/08/13182108/%D7%A1%D7%99%D7%99%D7%9E%D7%9F-185.jpg", 8),
]
foodsArr.forEach(dish => {
    let foodHTML = `
      <button class="foodPageRoot__foodGrid__food" onclick="dishIdentifier()">
        <div class="foodPageRoot__foodGrid__food__foodHeader">${dish.dishName}</div>
        <img class="foodPageRoot__foodGrid__food__foodImg" src="${dish.img}" alt="">
      </button>
    `;
    if (foodGrid) {
      foodGrid.innerHTML += foodHTML;
    }
  });
  