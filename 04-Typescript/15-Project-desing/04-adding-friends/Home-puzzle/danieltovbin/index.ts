// Create an app which store vegtebels in a fridge.

// create model for vegtabel, 

// add vegtabel and amount, and an image

// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )

// add a button to add vegtabel

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model

// 3) use search in vegtables (use regexp)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


class Vegetable {
    id:string;
    isEdit: boolean = false;
    constructor(public name: string, public amount:number, public image:string, id?:string| null){
        if(id){
            this.id = id;
        } else{
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        }
    }

    setEdit(set: boolean){
        this.isEdit = set;
    }
}

const vegetables: Vegetable[] = getVegetablesFromStorage();

renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));

function getVegetablesFromStorage(){
    // get vegetables from localStorage(string)
    const vegetablesString = localStorage.getItem("vegetables");
    try {
        if(!vegetablesString) return [];
        // convert string to array of obj
        const vegetablesArray = JSON.parse(vegetablesString);

        // convert array of obj to array of vegetables
        const vegetables:Vegetable[] = vegetablesArray.map((vegetable: Vegetable) => {
            new Vegetable(vegetable.name, vegetable.amount, vegetable.image, vegetable.id)
        })
        return vegetables;
    } catch (error) {
        console.error(error)
        return []
    }
};

function handleAddVegetable(ev:any){
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const amount = ev.target.amount.value;
        const image = ev.target.image.value;
    
        const newVegetable = new Vegetable(name, amount, image);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    
        // save to localStorage
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}

// render list of vegetables
// model -> controller --> view

function renderAllVegetables(vegetables:Vegetable[], rootVegetables:HTMLElement | null){
    try {
        if(!rootVegetables) throw new Error("No element");
        const html = vegetables.map(vegetable => renderVegetagleCard(vegetable)).join('')
        rootVegetables.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderVegetagleCard(vegetable:Vegetable){
    try {
        if(vegetable.isEdit){
            return `<div class="Card">
                <img src"${vegetable.image}">
                <form onsubmit="handleSetEditFriend(event)" id="${vegetable.id}">
                    <input type="text" name="name" value="${vegetable.name}">
                    <input type="text" name="amount" value="${vegetable.amount}">
                    <br>
                    <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                    <input type="submit" value="Set"
                </form>    
                </div>`
            }else {
                return `<div class="card">
                <img src"${vegetable.image}">  
                <p>${vegetable.name}</p>
                <p>${vegetable.amount}</p>
                <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                <button onclick="handleEdit('${vegetable.id}')">Edit</button>
                </div>
            `
    }
    } catch (error) {
        console.error(error)
        return ''
    }
}

// Delete 
function handleDeleteVegetable(vegetableId:string){
    try {
        const index = vegetables.findIndex(vegetable=> vegetable.id === vegetableId)
        if(!index) throw new Error("could not find vegetable");

        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify("vegetables"))

        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"))

    } catch (error) {
        console.error(error)
    }
}

// Edit
function handleEdit(vegetableId:string){
    try {
        const vegetable = vegetables.find(vegetable=> vegetable.id === vegetableId)
        if(!vegetable) throw new Error("couldnt find vegetable")

        vegetable.setEdit(true);
        renderAllVegetables(vegetables, document.querySelector("rootVegetable"))
    } catch (error) {
        console.error(error)
    }
}

function handleSetEditVegetable(ev:any){
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const amount = ev.target.amount.value;
        const vegetableId:string = ev.target.id;
    
        const vegetable:Vegetable| undefined = vegetables.find(vegetable=> vegetable.id === vegetableId)
        if(!vegetable) throw new Error("couldnt find vegetable")
        vegetable.name = name;
        vegetable.amount = amount
        vegetable.setEdit(false)
        console.log(vegetables)
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
        
    } catch (error) {
        console.error(error);
    }
}

















// class Friend {
//     id: string;
//     isEdit: boolean = false;
//     constructor(public name: string, public image: string, public phoneNumber: string, id?:string | null){
//         if(id){
//             this.id = id;
//         } else{
//         this.id = `id-${new Date().getTime()}-${Math.random()}`;
//         }
//     }

//     setEdit(set:boolean){
//         this.isEdit = set;
//     }
// }


// const friends:Friend[] = getFriendsFromStorage();

// renderAllFriends(friends, document.querySelector("#rootElement"));

// function getFriendsFromStorage(){
//     try {
//         // get friends from localStorag(string)
//         const friendsString = localStorage.getItem("friends");
//         if(!friendsString) return [];

//         // convert string to array of objects
//         const friendsArray = JSON.parse(friendsString);

//         // convert array of obj to array of friends
//         const friends = friendsArray.map(friend => {
//             return new Friend(friend.name, friend.image, friend.phoneNumber, friend.id)
//         })
//         return friends
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// };

// function handleAddFriend(ev:any){
//     try {
//         ev.preventDefault()
//         const name = ev.target.name.value;
//         const image = ev.target.image.value;
//         const phoneNumber = ev.target.phoneNumber.value;

//         const newFriend = new Friend(name, image, phoneNumber);
//         friends.push(newFriend);
//         renderAllFriends(friends, document.querySelector("#rootElement"));

//         // save to localStorage

//         localStorage.setItem("friends", JSON.stringify(friends));
//         ev.target.reset();
        
//     } catch (error) {
//         console.error(error)
//     }
// }


// // render list of friends
// // model -> controller --> view
// function renderAllFriends(friend:Friend[], htmlElement:HTMLElement | null){
//     try {
//         if(!htmlElement) throw new Error("No element");
//         const html = friends.map(friend => renderFriendCard(friend)).join('')

//         htmlElement.innerHTML = html;
//     } catch (error) {
//         console.error(error)
//     }
// }

// function renderFriendCard(friend: Friend){
//     try {
//         if(friend.isEdit){
//             return `<div class="card">
//             <img src="${friend.image}">
//             <input type="text" value="${friend.name}">
//             <p>${friend.phoneNumber}</p>
//             <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
//             <button>Set</button>
//         </div>`
//         }else {
//             return `<div class="card">
//                 <img src="${friend.image}">
//                 <p>${friend.name}</p>
//                 <p>${friend.phoneNumber}</p>
//                 <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
//                 <button onclick="handleEdit('${friend.id}')">Edit</button>
//             </div>`
//         }

//     } catch (error) {
//         console.error(error)
//         return ''
//     }
// }


// // Delete
// function handleDeleteFriend(friendId:string){
//     try {
//         const index = friends.findIndex(friend=> friend.id === friendId);
//         if(index === -1) throw new Error("could not find friend");

//         friends.splice(index, 1);
//         localStorage.setItem("friends", JSON.stringify("friends"))

//         renderAllFriends(friends, document.querySelector("#rootElement"))

//     } catch (error) {
//         console.error(error)
//     }
// }


// // Edit
// function handleEdit(friendId:string){
//     try {
//         const friend = friends.find(friend => friend.id === friendId)
//         if(!friend) throw new Error("couldnt find friend")

//         friend.setEdit(true);
//         renderAllFriends(friends, document.querySelector("#rootElement"))
//     } catch (error) {
//         console.error(error)
//     }

// }