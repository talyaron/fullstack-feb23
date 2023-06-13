var Cars = /** @class */ (function () {
    function Cars(name, year, imgSrc, price) {
        this.name = name;
        this.year = year;
        this.imgSrc = imgSrc;
        this.price = price;
    }
    Cars.prototype.yearsOld = function () {
        return (new Date().getFullYear() - this.year);
    };
    return Cars;
}());
var ibiza = new Cars("Seat Ibiza", 2018, "https://cdn.images.express.co.uk/img/dynamic/24/590x/Seat-ibiza-920656.jpg", 80000);
var octavia = new Cars("Skoda Octavia", 2016, "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/dsc_5182.jpg?itok=5888mtwZ", 100000);
var polo = new Cars("Volkswagen Polo", 2021, "https://www.auto-data.net/images/f125/Volkswagen-Polo-VI-facelift-2021.jpg", 90000);
var ferrari = new Cars("Ferrari Porasangue", 2023, "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-purosangue25-63ff822948d30.jpg?crop=0.660xw:0.743xh;0.144xw,0.209xh&resize=640:*", 900000);
var ibizaImg = document.querySelector("#carImgIbiza");
ibizaImg.src = ibiza.imgSrc;
var ibizaModel = document.querySelector("#modelIbiza");
ibizaModel.textContent = ibiza.name;
var ibizaYear = document.querySelector("#YearIbiza");
ibizaYear.textContent = "\u05E9\u05E0\u05D4: " + ibiza.year.toString();
var ibizaOld = document.querySelector("#OldIbiza");
ibizaOld.textContent = "\u05E9\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05D1\u05D9\u05E9: " + ibiza.yearsOld().toString();
var ibizaPrice = document.querySelector("#priceIbiza");
ibizaPrice.textContent = ibiza.price.toString() + "\u20AA";
var OctaviaImg = document.querySelector("#carImgOctavia");
OctaviaImg.src = octavia.imgSrc;
var OctaviaModel = document.querySelector("#modelOctavia");
OctaviaModel.textContent = octavia.name;
var OctaviaYear = document.querySelector("#YearOctavia");
OctaviaYear.textContent = "\u05E9\u05E0\u05D4: " + octavia.year.toString();
var OctaviaOld = document.querySelector("#OldOctavia");
OctaviaOld.textContent = "\u05E9\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05D1\u05D9\u05E9: " + octavia.yearsOld().toString();
var octaviaPrice = document.querySelector("#priceOctavia");
octaviaPrice.textContent = octavia.price.toString() + "\u20AA";
var poloImg = document.querySelector("#carImgpolo");
poloImg.src = polo.imgSrc;
var poloModel = document.querySelector("#modelpolo");
poloModel.textContent = polo.name;
var poloYear = document.querySelector("#Yearpolo");
poloYear.textContent = "\u05E9\u05E0\u05D4: " + polo.year.toString();
var poloOld = document.querySelector("#Oldpolo");
poloOld.textContent = "\u05E9\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05D1\u05D9\u05E9: " + polo.yearsOld().toString();
var poloPrice = document.querySelector("#pricePolo");
poloPrice.textContent = polo.price.toString() + "\u20AA";
