var Vegetables = /** @class */ (function () {
    function Vegetables(vegetablesName, vegetablesNumber, url, id) {
        this.vegetablesName = vegetablesName;
        this.vegetablesNumber = vegetablesNumber;
        this.url = url;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    Vegetables.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetables;
}());
var vegetables = [];
// function inputAddvegetables(event) {
//   try {
//     event.preventDefault();
//     const vegetablesName = event.target.elements.vegetablesName.value;
//     const vegetablesNumber = event.target.elements.vegetablesNumber.value;
//     const url = event.target.elements.url.value;
//     const id = event.target.elements.id;
//     const data = new Vegetables(vegetablesName, vegetablesNumber, url, id);
//     vegetables.push(data);
//     event.target.reset();
//     const root = document.querySelector("#root");
//     render(vegetables, root);
//   } catch (error) {
//     console.error(error);
//   }
// }
function inputAddvegetables(event) {
    try {
        event.preventDefault();
        var vegetablesName = event.target.elements.vegetablesName.value;
        var vegetablesNumber = Number(event.target.elements.vegetablesNumber.value);
        var url = event.target.elements.url.value;
        var id = event.target.elements.id;
        var data = new Vegetables(vegetablesName, vegetablesNumber, url, id);
        vegetables.push(data);
        event.target.reset();
        var root = document.querySelector("#root");
        render(vegetables, root);
    }
    catch (error) {
        console.error(error);
    }
}
// function render(vegetables, root) {
//   try {
//     const html = vegetables
//       .map((vegetable) => {
//         if(vegetable.vegetablesNumber<=0){
//           vegetable.vegetablesNumber="empty"
//         }
//         if (vegetable.url === '') {
//           vegetable.url = "https://cdn.carmella.co.il/wp-content/uploads/2020/11/9012.jpg";
//         }
//         if (vegetable.isEdit) {
//           return `<div class="card">
//             <form onsubmit="handleSetEditvegetables(event)" id="${vegetable.id}">
//               <input type="text" name="url" placeholder="vegetable-url" value="${vegetable.url}">
//               <input class="input1" type="text" name="vegetablesName" placeholder="vegetable-name" value="${vegetable.vegetablesName}">
//               <input class="input2" type="number" name="vegetablesNumber" placeholder="vegetable-Number" value="${vegetable.vegetablesNumber}">
//               <br>
//               <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
//               <input type="submit" value="SET">
//             </form>
//           </div>`;
//         } else {
//           return `<div class="card">
//             <img src="${vegetable.url}">
//             <p>Name: ${vegetable.vegetablesName}</p>
//             <p>Number: ${vegetable.vegetablesNumber}</p>
//             <button onclick="addToProduct('${vegetable.id}')"> I buy one </button>
//             <button onclick="revToProduct('${vegetable.id}')"> I ate one </button>
//             <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
//             <button onclick="handleEdit('${vegetable.id}')">Edit</button>
//           </div>`;
//         }
//       }).join("");
//     root.innerHTML = html;
//   } catch (error) {
//     console.error(error);
//     return "";
//   }
// }
function render(vegetables, root) {
    try {
        var html = vegetables
            .map(function (vegetable) {
            var vegetablesNumber = vegetable.vegetablesNumber;
            if (vegetablesNumber <= 0) {
                vegetablesNumber = "empty";
            }
            if (vegetable.url === '') {
                vegetable.url = "https://cdn.carmella.co.il/wp-content/uploads/2020/11/9012.jpg";
            }
            if (vegetable.isEdit) {
                return "<div class=\"card\">\n              <form class=\"from1\" onsubmit=\"handleSetEditvegetables(event)\" id=\"" + vegetable.id + "\">\n                <input type=\"text\" name=\"url\" placeholder=\"vegetable-url\" value=\"" + vegetable.url + "\">\n                <input class=\"input1\" type=\"text\" name=\"vegetablesName\" placeholder=\"vegetable-name\" value=\"" + vegetable.vegetablesName + "\">\n                <input class=\"input1\" type=\"number\" name=\"vegetablesNumber\" placeholder=\"vegetable-Number\" value=\"" + vegetablesNumber + "\">\n                <br>\n                <button onclick=\"handleDeletevegetables('" + vegetable.id + "')\">Delete</button>\n                <input class=\"input2\" type=\"submit\" value=\"SET\">\n              </form>\n            </div>";
            }
            else {
                return "<div class=\"card\">\n              <img src=\"" + vegetable.url + "\">\n              <p>Name: " + vegetable.vegetablesName + "</p>\n              <p>Number: " + vegetablesNumber + "</p>\n              <button onclick=\"addToProduct('" + vegetable.id + "')\"> I buy one </button>\n              <button onclick=\"revToProduct('" + vegetable.id + "')\"> I ate one </button>\n              <button onclick=\"handleDeletevegetables('" + vegetable.id + "')\">Delete</button>\n              <button onclick=\"handleEdit('" + vegetable.id + "')\">Edit</button>\n            </div>";
            }
        })
            .join("");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleEdit(id) {
    var vegetable = vegetables.find(function (vegetable) { return vegetable.id === id; });
    if (vegetable) {
        vegetable.setEdit(true);
        var root = document.querySelector("#root");
        render(vegetables, root);
    }
}
function handleSetEditvegetables(event) {
    event.preventDefault();
    var id = event.target.id;
    var vegetablesName = event.target.elements.vegetablesName.value;
    var vegetablesNumber = event.target.elements.vegetablesNumber.value;
    var url = event.target.elements.url.value;
    var vegetable = vegetables.find(function (vegetable) { return vegetable.id === id; });
    if (vegetable) {
        vegetable.vegetablesName = vegetablesName;
        vegetable.vegetablesNumber = vegetablesNumber;
        vegetable.url = url;
        vegetable.setEdit(false);
        var root = document.querySelector("#root");
        render(vegetables, root);
    }
}
function handleDeletevegetables(id) {
    var index = vegetables.findIndex(function (vegetable) { return vegetable.id === id; });
    if (index !== -1) {
        vegetables.splice(index, 1);
        var root = document.querySelector("#root");
        render(vegetables, root);
    }
}
function addToProduct(id) {
    var vegetable = vegetables.find(function (vegetable) { return vegetable.id === id; });
    if (vegetable) {
        vegetable.vegetablesNumber++;
        var root = document.querySelector("#root");
        render(vegetables, root);
        console.log(vegetable.vegetablesNumber);
    }
}
function revToProduct(id) {
    var vegetable = vegetables.find(function (vegetable) { return vegetable.id === id; });
    if (vegetable) {
        if (vegetable.vegetablesNumber <= 0) {
            throw new Error("empty");
        }
        else {
            vegetable.vegetablesNumber--;
        }
        var root = document.querySelector("#root");
        render(vegetables, root);
    }
}
