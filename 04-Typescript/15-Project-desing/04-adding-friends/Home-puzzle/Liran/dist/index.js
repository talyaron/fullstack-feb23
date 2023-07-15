var Vegetable = /** @class */ (function () {
    function Vegetable(name, image, quantity, id) {
        this.name = name;
        this.image = image;
        this.quantity = quantity;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
var vegetables = getVegetablesFromStorage();
<<<<<<< HEAD
var vegetablesNames = [];
vegetables.forEach(function (veg) {
    if (veg !== undefined)
        vegetablesNames.push(veg.name);
});
function getVegetablesFromStorage() {
    try {
        debugger;
        //get friends from locastorage (string)
        var vegetablestring = localStorage.getItem("vegetables");
        // const vegetableNamesstring = localStorage.getItem("vegetablesNames");
        if (!vegetablestring)
            return [];
        // if (!vegetableNamesstring) return [];
        //convert string to array of objects
        var vegetablesArray = JSON.parse(vegetablestring);
        // const vegetablesNamesArray = JSON.parse(vegetableNamesstring);
=======
function getVegetablesFromStorage() {
    try {
        //get friends from locastorage (string)
        var vegetablestring = localStorage.getItem("vegetables");
        if (!vegetablestring)
            return [];
        //convert string to array of objects
        var vegetablesArray = JSON.parse(vegetablestring);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        //convert array of objects to array of friends
        var vegetables_1 = vegetablesArray.map(function (vegetable) {
            return new Vegetable(vegetable.name, vegetable.image, vegetable.quantity, vegetable.id);
        });
<<<<<<< HEAD
        debugger;
        renderAllVegetables(vegetables_1, document.querySelector("#rootVegetables"));
=======
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        return vegetables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function handleAddVegetable(ev) {
    try {
        ev.preventDefault();
<<<<<<< HEAD
        debugger;
        var name_1 = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var quantity = ev.target.elements.quantity.value;
        if (vegetablesNames.find(function (vegetable) { return vegetable == name_1; })) {
            alert(name_1 + " Already in your refrigerator");
        }
        else {
            var newVegetable = new Vegetable(name_1, image, quantity);
            vegetables.push(newVegetable);
            vegetablesNames.push(name_1);
            renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
            //save to localStorage
            localStorage.setItem("vegetables", JSON.stringify(vegetables));
        }
=======
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var quantity = ev.target.elements.quantity.value;
        var newVegetable = new Vegetable(name, image, quantity);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
        //save to localStorage
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearchVegetable(ev) {
    try {
        ev.preventDefault();
        debugger;
        console.dir(ev);
<<<<<<< HEAD
        // if(ev.currentTarget.)
        var nameForSearch = ev.target.elements.search.value;
=======
        if (ev.currentTarget.)
            var nameForSearch = ev.target.elements.search.value;
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        if (vegetables.includes(nameForSearch))
            renderSpecificVegetables(nameForSearch, document.querySelector("#rootVegetables"));
        else {
            alert("No " + nameForSearch + " in your refrigerator");
        }
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function renderSpecificVegetables(vegetable, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html_1 = "";
        //   const html = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join(" ");
<<<<<<< HEAD
        var regex_1 = RegExp("" + vegetable, 'g');
=======
        var regex_1 = RegExp("*" + vegetable + "*", 'g');
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        //   const html = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join(" ");
        vegetables.forEach(function (vegetable) {
            if (regex_1.test(vegetable.name))
                html_1 += renderVegetableCard(vegetable);
        });
        htmlElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllVegetables(vegetables, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = vegetables.map(function (vegetable) { return renderVegetableCard(vegetable); }).join(" ");
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderVegetableCard(vegetable) {
    try {
        if (vegetable.isEdit) {
<<<<<<< HEAD
            return "<div class=\"card\">\n                    <form onsubmit=\"handleSetEditVegetable(event)\" id=\"" + vegetable.id + "\">\n                                      <img src=\"" + vegetable.image + "\">\n                                      <input type=\"text\" name=\"name\" value=\"" + vegetable.name + "\">\n                                      <input type=\"text\" name=\"quantity\" value=\"" + vegetable.quantity + "\">\n                                      <div class=\"buttons\">\n                                      <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                                      <input type=\"submit\" value=\"SET\">\n                                      </div>\n                                  </form>\n                              </div>\n                              ";
        }
        else {
            return "<div class=\"card\">\n                      <img src=\"" + vegetable.image + "\">\n                      <p>" + vegetable.name + "</p>\n                      <p>" + vegetable.quantity + "</p>\n                      <div class=\"buttons\">\n                      <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                      <button onclick=\"handleEdit('" + vegetable.id + "')\">Edit</button>\n                      <button onclick=\"handleEat('" + vegetable.id + "')\">Eat</button>\n                      <button onclick=\"handleBuy('" + vegetable.id + "')\">Buy</button>\n                      </div>\n                  </div>\n              ";
=======
            return "<div class=\"card\">\n                                  <img src=\"" + vegetable.image + "\">\n                                  <form onsubmit=\"handleSetEditVegetable(event)\" id=\"" + vegetable.id + "\">\n                                      <input type=\"text\" name=\"name\" value=\"" + vegetable.name + "\">\n                                      <input type=\"text\" name=\"quantity\" value=\"" + vegetable.quantity + "\">\n                                      <br>\n                                      <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                                      <input type=\"submit\" value=\"SET\">\n                                  </form>\n                              </div>\n                              ";
        }
        else {
            return "<div class=\"card\">\n                      <img src=\"" + vegetable.image + "\">\n                      <p>" + vegetable.name + "</p>\n                      <p>" + vegetable.quantity + "</p>\n                      <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                      <button onclick=\"handleEdit('" + vegetable.id + "')\">Edit</button>\n                  </div>\n              ";
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        }
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteVegetable(vegetableId) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id === vegetableId; });
        if (index === -1)
            throw new Error("Could not find vegetable");
        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
//Edit
//
// enable editing
function handleEdit(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("couldnt find friend");
        vegetable.setEdit(true);
<<<<<<< HEAD
        //save to localStorage
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleEat(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("couldnt find friend");
        if (vegetable.quantity == 0) {
            alert("No more " + vegetable.name + ", you need to buy");
        }
        else {
            vegetable.quantity--;
            //save to localStorage
            localStorage.setItem("vegetables", JSON.stringify(vegetables));
            renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleBuy(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("couldnt find friend");
        vegetable.quantity++;
        //save to localStorage
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
=======
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditVegetable(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var quantity = ev.target.quantity.value;
        var vegetableId_1 = ev.target.id;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId_1; });
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetable.name = name;
        vegetable.quantity = quantity;
        vegetable.setEdit(false);
        console.log(vegetables);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
<<<<<<< HEAD
function autocompleteMatch(input) {
    if (input == '') {
        return [];
    }
    var reg = new RegExp(input);
    return vegetablesNames.filter(function (term) {
        if (term.match(reg)) {
            return term;
        }
    });
}
function showResults(val) {
    try {
        debugger;
        var res = document.getElementById("result");
        if (!res)
            throw new Error("no result div");
        res.innerHTML = '';
        var list = '';
        var terms = autocompleteMatch(val);
        for (var i = 0; i < terms.length; i++) {
            list += '<li>' + terms[i] + '</li>';
        }
        res.innerHTML = '<ul>' + list + '</ul>';
    }
    catch (error) {
    }
}
=======
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
// //model
// class Friend {
//     id: string;
//     isEdit: boolean = false;
//     constructor(
//       public name: string,
//       public image: string,
//       public phoneNumber: string,
//       id?: string | null
//     ) {
//       if (id) {
//         this.id = id;
//       } else {
//         this.id = `id-${new Date().getTime()}-${Math.random()}`;
//       }
//     }
//     setEdit(set: boolean) {
//       this.isEdit = set;
//     }
//   }
//   const friends: Friend[] = getFriendsFromStorage();
//   renderAllFriends(friends, document.querySelector("#rootFriends"));
//   function getFriendsFromStorage(): Friend[] {
//     try {
//       //get friends from locastorage (string)
//       const friendsString = localStorage.getItem("friends");
//       if (!friendsString) return [];
//       //convert string to array of objects
//       const friendsArray = JSON.parse(friendsString);
//       //convert array of objects to array of friends
//       const friends: Friend[] = friendsArray.map((friend: Friend) => {
//         return new Friend(
//           friend.name,
//           friend.image,
//           friend.phoneNumber,
//           friend.id
//         );
//       });
//       return friends;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   }
//   //view
//   //input form
//   // from view to model: view-control-model
//   function handleAddFriend(ev: any) {
//     try {
//       ev.preventDefault();
//       const name = ev.target.elements.name.value;
//       const image = ev.target.elements.image.value;
//       const phoneNumber = ev.target.elements.phoneNumber.value;
//       const newFriend = new Friend(name, image, phoneNumber);
//       friends.push(newFriend);
//       renderAllFriends(friends, document.querySelector("#rootFriends"));
//       //save to localStorage
//       localStorage.setItem("friends", JSON.stringify(friends));
//       ev.target.reset();
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   //render list of friends
//   //model -> controler --> view
//   function renderAllFriends(friends: Friend[], htmlElement: HTMLElement | null) {
//     try {
//       
//       if (!htmlElement) throw new Error("No element");
//       const html = friends.map((friend) => renderFriendCard(friend)).join(" ");
//       htmlElement.innerHTML = html;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   function renderFriendCard(friend: Friend) {
//     try {
//       if (friend.isEdit) {
//         return `<div class="card">
//                       <img src="${friend.image}">
//                       <form onsubmit="handleSetEditFriend(event)" id="${friend.id}">
//                           <input type="text" name="name" value="${friend.name}">
//                           <input type="text" name="phoneNumber" value="${friend.phoneNumber}">
//                           <br>
//                           <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
//                           <input type="submit" value="SET">
//                       </form>
//                   </div>
//                   `;
//       } else {
//         return `<div class="card">
//           <img src="${friend.image}">
//           <p>${friend.name}</p>
//           <p>${friend.phoneNumber}</p>
//           <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
//           <button onclick="handleEdit('${friend.id}')">Edit</button>
//       </div>
//   `;
//       }
//     } catch (error) {
//       console.error(error);
//       return "";
//     }
//   }
//   //Delete
//   //button (view (card)) -> control to delete from array -> edit model (and save to local) -> reder new model-view
//   function handleDeleteFriend(friendId: string) {
//     try {
//       const index = friends.findIndex((friend) => friend.id === friendId);
//       if (index === -1) throw new Error("Could not find friend");
//       friends.splice(index, 1);
//       localStorage.setItem("friends", JSON.stringify(friends));
//       renderAllFriends(friends, document.querySelector("#rootFriends"));
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   //Edit
//   //
//   // enable editing
//   function handleEdit(friendId: string) {
//     try {
//       const friend = friends.find((friend) => friend.id === friendId);
//       if (!friend) throw new Error("couldnt find friend");
//       friend.setEdit(true);
//       renderAllFriends(friends, document.querySelector("#rootFriends"));
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   function handleSetEditFriend(ev: any) {
//     try {
//       ev.preventDefault();
//       const name = ev.target.name.value;
//       const phoneNumber = ev.target.phoneNumber.value;
//       const friendId: string = ev.target.id;
//       const friend: Friend | undefined = friends.find(
//         (friend) => friend.id === friendId
//       );
//       if (!friend) throw new Error("couldnt find friend");
//       friend.name = name;
//       friend.phoneNumber = phoneNumber;
//       friend.setEdit(false);
//       console.log(friends);
//       localStorage.setItem("friends", JSON.stringify(friends));
//       renderAllFriends(friends, document.querySelector("#rootFriends"));
//     } catch (error) {
//       console.error(error);
//     }
//   }
