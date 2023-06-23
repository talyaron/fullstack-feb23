
const wrapper= document.querySelector(".wrapper")

class user{
    constructor(public username:string, public imgUrl:string,public userColor,public numberRepeat,public userId?){
        this.userId=Date.now()

    }

    render(numberRepeat){
      let card:any= document.createElement("div")
      card.id=this.userId
      card.className="userCard"
      wrapper?.appendChild(card)

        card.innerHTML=`name:${this.username} <button onclick="divDelete(event)">delete</button>`
        card.style.backgroundColor=this.userColor

        let cardimgs = document.createElement("div")
        cardimgs.className="cardimgs"
        card.appendChild(cardimgs)
        
        for(let i=0;i<numberRepeat;i++){
            let cardimg:any= document.createElement("div")
            cardimg.className="cardimg"
            cardimg.style.backgroundImage+=`url(${this.imgUrl}) `
            cardimgs.appendChild(cardimg)
         
      }
    }

  
}


let userArray:user[]= new Array();

function handleSubmit(ev){
    ev.preventDefault()
  const  username=ev.target.name.value
  const  imgUrl=ev.target.imgUrl.value
    const userColor=ev.target.userColor.value
    const numberRepeat=ev.target.numberRpeat.value

  
    let newUser= new user(username,imgUrl,userColor,numberRepeat)
    userArray.push( newUser)
    newUser.render(numberRepeat)
    
}


 function divDelete(ev){
     console.log(ev.target.parentElement.id)
     let fatherid=ev.target.parentElement.id
     userArray.forEach(element => {
       if(element.userId==fatherid){
        ev.target.parentElement.remove()
       }
     });
}




