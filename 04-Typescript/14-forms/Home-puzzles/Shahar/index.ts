class Profile {
id: string;
constructor(public userPic: string, public widthPic:number , public color: string ){
    this.id = `id-${Math.random()}`;
}
}

const profileArray: Profile[] = new Array();

function handleSubmit(ev: any){
    try {
        ev.preventDefault();
        
        const userPic = ev.target.userPic.value;
        const widthPic = ev.target.widthPic.value;
        const color = ev.target.color.value
        const profile = new Profile(userPic,widthPic,color);

        profileArray.push(profile);

        renderCards(profileArray, document.querySelector("#cards"));
        
    } catch (error) {
        console.error(error)
    }
    console.dir(ev);
}


function renderCards(profiles: Profile[], element : HTMLElement|null){
    try {
        if(!element)throw new Error("element is not defined")
        const html = profiles.map((profile) => renderCard(profile)).join(" ");

        element.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderCard(profile: Profile){
    try {

        const html = `<div id="${profile.id}" class="card" style="width:${profile.widthPic}vh; background-color:${profile.color}"; >
        <img class="image" src="${profile.userPic}">
      </div>`;
        return html
        
    } catch (error) {
        console.error(error)
        
    }
}
