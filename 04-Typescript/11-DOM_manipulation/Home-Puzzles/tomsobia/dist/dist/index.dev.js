"use strict";

function init() {
  Car =
  /** @class */
  function () {
    function Car(company, img) {
      this.company = company;
      this.img = img;
    }

    return Car;
  }();

  var arrCars = [new Car("mazda", "https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2019/12/05/r1eALuiUpr/004.jpg"), new Car("hyundai", "https://cdn.motor1.com/images/mgl/RvGRx/s1/hyundai-ioniq-5-2021.jpg"), new Car("audi", "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_600.jpg")];
}