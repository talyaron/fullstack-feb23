class Friends {
    name: string;
    coffees: number;
    imgSrc: string;
    constructor(name: string, coffees: number, imgSrc: string) {
        this.name = name;
        this.coffees = coffees;
        this.imgSrc = imgSrc;
    }

    getCoffees() {
        return this.coffees
    }

}

let friendsCoffee: Friends[] = [
    new Friends("Ross", 15000, "https://i.pinimg.com/474x/f6/e9/40/f6e9407fe5b6378283ec1d49a6d6e393.jpg"),
    new Friends("Rachel", 40000, "https://favim.com/pd/s11/orig/8/816/8169/81699/rachel-green-f.r.i.e.n.d.s-jennifer-aniston-Favim.com-8169965.jpg"),
    new Friends("Joey", 200000, "https://i.pinimg.com/originals/0b/12/5a/0b125abc9a4a013ba009f24271b30ef0.jpg"),
    new Friends("Chandler", 70000, "https://i.pinimg.com/736x/c4/41/8c/c4418cae5939e36098f45c457431f9fc.jpg"),
    new Friends("Monica", 150000, "https://i.pinimg.com/originals/2a/a3/30/2aa33089bfc1b20f820be87de8441b92.jpg"),
    new Friends("Phoebe", 30000, "https://www.tvguide.com/a/img/hub/2018/11/28/86de3396-cf1b-4f95-aaf0-a0471ef70671/phoebe1.jpg"),
];

const container = document.querySelector('#friends-container');

function renderFriends(friendsCoffee: Friends[]) {
    let html = '';

    friendsCoffee.forEach((friendsCoffee)=> {
        html += `
        <div class="friend">
        <img src"${friendsCoffee.imgSrc}" alt="${friendsCoffee.name}">
        <h2>${friendsCoffee.name}</h2>
        </div>`;
    });

    console.log(html);
    if (container) {
        container.innerHTML = html;
    }

    container.innerHTML = '';
    friendsCoffee.forEach((friendsCoffee) => {
      container.innerHTML += `
        <div class="friends">
          <img src="${friendsCoffee.imgSrc}" alt="${friendsCoffee.name}">
          <h2>${friendsCoffee.name}</h2>
        </div>
      `;
    });
}

renderFriends(friendsCoffee);