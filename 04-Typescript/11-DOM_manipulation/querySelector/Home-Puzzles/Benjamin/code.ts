class Cars{
    name:string;
    year:number;
    imgSrc:string;
    price:number;
    constructor(name:string,year:number,imgSrc:string,price:number){
        this.name=name;
        this.year= year;
        this.imgSrc= imgSrc;
        this.price=price;
    }
yearsOld(){
    return (new Date().getFullYear()-this.year);
}
}




const ibiza= new Cars("Seat Ibiza", 2018, "https://cdn.images.express.co.uk/img/dynamic/24/590x/Seat-ibiza-920656.jpg",80000)
const octavia= new Cars("Skoda Octavia", 2016, "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/dsc_5182.jpg?itok=5888mtwZ",100000)
const polo= new Cars("Volkswagen Polo", 2021, "https://www.auto-data.net/images/f125/Volkswagen-Polo-VI-facelift-2021.jpg",90000)
const ferrari= new Cars("Ferrari Porasangue",2023, "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-purosangue25-63ff822948d30.jpg?crop=0.660xw:0.743xh;0.144xw,0.209xh&resize=640:*",900000)

const ibizaImg= document.querySelector("#carImgIbiza") as HTMLImageElement;
ibizaImg.src = ibiza.imgSrc;
const ibizaModel= document.querySelector("#modelIbiza") as HTMLElement;
ibizaModel.textContent= ibiza.name
const ibizaYear= document.querySelector("#YearIbiza") as HTMLElement;
ibizaYear.textContent= `שנה: ${ibiza.year.toString()}`
const ibizaOld= document.querySelector("#OldIbiza") as HTMLElement;
ibizaOld.textContent= `שנים על הכביש: ${ibiza.yearsOld().toString()}`
const ibizaPrice= document.querySelector("#priceIbiza") as HTMLElement;
ibizaPrice.textContent= `${ibiza.price.toString()}₪`

const OctaviaImg= document.querySelector("#carImgOctavia") as HTMLImageElement;
OctaviaImg.src = octavia.imgSrc;
const OctaviaModel= document.querySelector("#modelOctavia") as HTMLElement;
OctaviaModel.textContent= octavia.name
const OctaviaYear= document.querySelector("#YearOctavia") as HTMLElement;
OctaviaYear.textContent= `שנה: ${octavia.year.toString()}`
const OctaviaOld= document.querySelector("#OldOctavia") as HTMLElement;
OctaviaOld.textContent= `שנים על הכביש: ${octavia.yearsOld().toString()}`
const octaviaPrice= document.querySelector("#priceOctavia") as HTMLElement;
octaviaPrice.textContent= `${octavia.price.toString()}₪`

const poloImg= document.querySelector("#carImgpolo") as HTMLImageElement;
poloImg.src = polo.imgSrc;
const poloModel= document.querySelector("#modelpolo") as HTMLElement;
poloModel.textContent= polo.name
const poloYear= document.querySelector("#Yearpolo") as HTMLElement;
poloYear.textContent= `שנה: ${polo.year.toString()}`
const poloOld= document.querySelector("#Oldpolo") as HTMLElement;
poloOld.textContent= `שנים על הכביש: ${polo.yearsOld().toString()}`
const poloPrice= document.querySelector("#pricePolo") as HTMLElement;
poloPrice.textContent= `${polo.price.toString()}₪`


