"use strict";

var btn = document.getElementById('calculate');
btn.addEventListener('click', function () {
  var height = document.querySelector('#height').value;
  var weight = document.querySelector('#weight').value;

  if (height === '' || weight === '') {
    alert('Please fill out the input fields!');
    return;
  } //BMI = wight in KG / (height in m*height in m)


  height = height / 100;
  var BMI = weight / (height * height);
  BMI = BMI.toFixed(2);
  document.querySelector('#result').innerHTML = BMI;
});