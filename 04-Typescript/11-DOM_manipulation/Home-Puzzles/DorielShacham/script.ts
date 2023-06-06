class Motorcycle {
  name: string;
  price: number;
  imgSrc: string;
  constructor(name: string, price: number, imgSrc: string) {
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
  }

  getPrice() {
    return this.price;
  }
}

const motorcycles: Motorcycle[] = [
  new Motorcycle("Kawasaki", 65_000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Kawasaki/Ninja%201000SX/NINJA%201000SX%20GREEN.png"),
  new Motorcycle("Benelli", 100_000, "https://www.motorcyclesdirect.co.uk/upload/images/--Benelli/2022%20Leoncino%20800%20Trail/Benelli%20Leoncino%20800%20Trail.png"),
  new Motorcycle("Suzuki", 60_000, "https://www.motorcyclesdirect.co.uk/upload/images/--2022%20Suzuki/GSX-S1000/gsx-s1000_m2_ysf_right.png"),
  new Motorcycle("Aprilia", 70_000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Aprilia/35%20RS660%20BLACK.png"),
  new Motorcycle("Royal Enfield", 40_000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Royal%20Enfield/Thunder/Rocker%20Red.png"),
];

const main: HTMLElement | null = document.querySelector("body > div.Main");
const inputs: HTMLInputElement | null = document.querySelector("#Search");
const button: HTMLElement | null  = document.querySelector(".btnSearch");
const selectMoto: HTMLSelectElement = document.querySelector("#motorcycles") || new HTMLSelectElement();

selectMoto.addEventListener("change", () => {
  if (!!inputs) inputs.value = selectMoto.value;
});

if(inputs?.value === "") inputs.value = "Kawasaki"; 

if (button) {
  button.addEventListener("click", () => {
    const input = inputs as HTMLInputElement;
    const search = input.value;

    // const query = new URL(window.location.href.split("?")[0] +`?q=${search}`);
    const fullURL = window.location.origin + window.location.pathname +`?q=${search}`;  // const newQuery = new RegExp(window.location.href.replace(/(\?.*)?/gm,"")+`?q=${search}`) 
    // console.log(newQuery)
    window.history.pushState({}, '', fullURL.toString());

    const motorcycleHTML = motorcycles.filter((motorcycle) => {
        return motorcycle.name.toLowerCase().includes(search.toLowerCase());
      })
      .map((motorcycle) => {
        return `<div><p>${motorcycle.name}, price: ${motorcycle.getPrice().toLocaleString()} NIS</p><img src="${motorcycle.imgSrc}"></div><hr style="border: 2px solid white; width:100%; position: relative; top: 100px; margin: 20px; right:10px;">`;
      })
      .join(" ");
    if (main) {
      main.innerHTML = motorcycleHTML;
    }
  });
}