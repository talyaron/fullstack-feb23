class Vegetable{
    isEdit:boolean = false;
    id:string;
    constructor(public name:string, public image:string, public quantity:number, id?: string | null ){
        if (id) {
                    this.id = id;
                  } else {
                    this.id = `id-${new Date().getTime()}-${Math.random()}`;
                  }
    }

    setEdit(set: boolean){
        this.isEdit = set;
    }
}

const vegetables: Vegetable[] = getVegetablesFromStorage();
const vegetablesNames: string[] = [];
vegetables.forEach(veg =>{
  if(veg !== undefined)
  vegetablesNames.push(veg.name)
})

  function getVegetablesFromStorage(): Vegetable[] {
        try {
            debugger;

          //get friends from locastorage (string)
          const vegetablestring = localStorage.getItem("vegetables");
          // const vegetableNamesstring = localStorage.getItem("vegetablesNames");
          if (!vegetablestring) return [];
          // if (!vegetableNamesstring) return [];
      
          //convert string to array of objects
          const vegetablesArray = JSON.parse(vegetablestring);
          // const vegetablesNamesArray = JSON.parse(vegetableNamesstring);
      
          //convert array of objects to array of friends
          const vegetables: Vegetable[] = vegetablesArray.map((vegetable: Vegetable) => {
            return  new Vegetable(
              vegetable.name,
              vegetable.image,
              vegetable.quantity,
              vegetable.id
            );
          });
          debugger;
          renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));

          return vegetables;
        } catch (error) {
          console.error(error);
          return [];
        }
    }

      function handleAddVegetable(ev: any) {
            try {
              ev.preventDefault();
              debugger;
              const name = ev.target.elements.name.value;
              const image = ev.target.elements.image.value;
              const quantity = ev.target.elements.quantity.value;
              if(vegetablesNames.find(vegetable => vegetable == name)){
                alert(`${name} Already in your refrigerator`)
              }
              else{
                const newVegetable = new Vegetable(name, image, quantity);
                vegetables.push(newVegetable);
                vegetablesNames.push(name);
                renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                
                //save to localStorage
            
                localStorage.setItem("vegetables", JSON.stringify(vegetables));
              }

              ev.target.reset();
            } catch (error) {
              console.error(error);
            }
          }

          function handleSearchVegetable(ev: any) {
            try {
              ev.preventDefault();
              debugger;
              console.dir(ev)
              // if(ev.currentTarget.)
              const nameForSearch = ev.target.elements.search.value;
              if(vegetables.includes(nameForSearch))
              renderSpecificVegetables(nameForSearch, document.querySelector("#rootVegetables"));
            else{
                alert(`No ${nameForSearch} in your refrigerator`);
            }

              ev.target.reset();
            } catch (error) {
              console.error(error);
            }
          }

          function renderSpecificVegetables(vegetable: string, htmlElement: HTMLElement | null) {
            try {
              
              if (!htmlElement) throw new Error("No element");
              let html = ``;
            //   const html = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join(" ");
            const regex = RegExp(`${vegetable}`,'g');
                        //   const html = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join(" ");
            vegetables.forEach(vegetable =>{
                if(regex.test(vegetable.name))
                html += renderVegetableCard(vegetable);

            })

              htmlElement.innerHTML = html;
            } catch (error) {
              console.error(error);
            }
          }

          function renderAllVegetables(vegetables: Vegetable[], htmlElement: HTMLElement | null) {
                try {
                  
                  if (!htmlElement) throw new Error("No element");
                  const html = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join(" ");
              
                  htmlElement.innerHTML = html;
                } catch (error) {
                  console.error(error);
                }
              }
              
              function renderVegetableCard(vegetable: Vegetable) {
                try {
                  if (vegetable.isEdit) {
                    return `<div class="card">
                    <form onsubmit="handleSetEditVegetable(event)" id="${vegetable.id}">
                                      <img src="${vegetable.image}">
                                      <input type="text" name="name" value="${vegetable.name}">
                                      <input type="text" name="quantity" value="${vegetable.quantity}">
                                      <div class="buttons">
                                      <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                                      <input type="submit" value="SET">
                                      </div>
                                  </form>
                              </div>
                              `;
                  } else {
                    return `<div class="card">
                      <img src="${vegetable.image}">
                      <p>${vegetable.name}</p>
                      <p>${vegetable.quantity}</p>
                      <div class="buttons">
                      <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                      <button onclick="handleEdit('${vegetable.id}')">Edit</button>
                      <button onclick="handleEat('${vegetable.id}')">Eat</button>
                      <button onclick="handleBuy('${vegetable.id}')">Buy</button>
                      </div>
                  </div>
              `;
                  }
                } catch (error) {
                  console.error(error);
                  return "";
                }
              }

              function handleDeleteVegetable(vegetableId: string) {
                    try {
                      const index = vegetables.findIndex((vegetable) => vegetable.id === vegetableId);
                      if (index === -1) throw new Error("Could not find vegetable");
                  
                      vegetables.splice(index, 1);
                      localStorage.setItem("vegetables", JSON.stringify(vegetables));
                  
                      renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                    } catch (error) {
                      console.error(error);
                    }
                  }
                  
                  //Edit
                  //
                  
                  // enable editing
                  
                  function handleEdit(vegetableId: string) {
                    try {
                      const vegetable = vegetables.find((vegetable) => vegetable.id === vegetableId);
                      if (!vegetable) throw new Error("couldnt find friend");
                  
                      vegetable.setEdit(true);
                         //save to localStorage
          
                      localStorage.setItem("vegetables", JSON.stringify(vegetables));
                      renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                    } catch (error) {
                      console.error(error);
                    }
                  }

                  function handleEat(vegetableId: string) {
                    try {
                      const vegetable = vegetables.find((vegetable) => vegetable.id === vegetableId);
                      if (!vegetable) throw new Error("couldnt find friend");
                      if (vegetable.quantity == 0)
                      {
                        alert(`No more ${vegetable.name}, you need to buy`)
                      }
                      else{

                        vegetable.quantity--;
                           //save to localStorage
            
                         localStorage.setItem("vegetables", JSON.stringify(vegetables));
                        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                      }
                  
                    } catch (error) {
                      console.error(error);
                    }
                  }

                  function handleBuy(vegetableId: string) {
                    try {
                      const vegetable = vegetables.find((vegetable) => vegetable.id === vegetableId);
                      if (!vegetable) throw new Error("couldnt find friend");
                  
                      vegetable.quantity++;
                         //save to localStorage
          
                      localStorage.setItem("vegetables", JSON.stringify(vegetables));
                      renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                    } catch (error) {
                      console.error(error);
                    }
                  }
                  
                  function handleSetEditVegetable(ev: any) {
                    try {
                      ev.preventDefault();
                      const name = ev.target.name.value;
                      const quantity = ev.target.quantity.value;
                      const vegetableId: string = ev.target.id;
                  
                      const vegetable: Vegetable | undefined = vegetables.find(
                        (vegetable) => vegetable.id === vegetableId
                      );
                      if (!vegetable) throw new Error("couldnt find vegetable");
                      vegetable.name = name;
                      vegetable.quantity = quantity;
                      vegetable.setEdit(false);
                      console.log(vegetables);
                      localStorage.setItem("vegetables", JSON.stringify(vegetables));
                      renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
                    } catch (error) {
                      console.error(error);
                    }
                  }

                  function autocompleteMatch(input) {
                    if (input == '') {
                      return [];
                    }
                    var reg = new RegExp(input)
                    return vegetablesNames.filter(function(term) {
                      if (term.match(reg)) {
                        return term;
                      }
                    });
                  }
                  
                  function showResults(val) {
                    try {
                      debugger;
                      const res = document.getElementById("result");
                      if(!res)throw new Error("no result div")
                       res.innerHTML = '';
                       let list = '';
                       let terms = autocompleteMatch(val);
                       for (let i=0; i<terms.length; i++) {
                         list += '<li>' + terms[i] + '</li>';
                       }
                       res.innerHTML = '<ul>' + list + '</ul>';
                      
                    } catch (error) {
                      
                    }
                  }
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
  