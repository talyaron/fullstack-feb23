// Create an app which store vegtebels in a fridge.

// create model for vegtabel, 

// add vegtabel and amount, and an image

// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos ) and add a button to add one vegtabel

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model

const wrapper=document.querySelector(".wrapper")

class vegtable {
    
    uid=Math.floor(Math.random() * 1000)
    constructor(public name, public img, ){

    }
    // this.id=id

}

function renderveg(ev){
    ev.preventDefault()

    console.log(ev.target.vegtableImg.value)
    console.log(ev.target.vegtableName.value)
    ev.target.vegtableName.value
    ev.target.vegtableImg.value
}