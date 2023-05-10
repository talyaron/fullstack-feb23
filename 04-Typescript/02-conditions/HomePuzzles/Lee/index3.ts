const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height === '' || weight === ''){
       alert('Please fill out the input fields!'); 
       return;
    }

    //BMI = wight in KG / (height in m*height in m)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5) {
        status = "Underweight";
    }
    else if(BMI >= 18.5 && BMI < 25) {
        status = "Normal";
    }

    else if(BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }

    else(BMI >= 30) {
        status = "Obese";
    }

    document.querySelector('.comment').innerHTML = `Comment:you are <span id="comment">${status}</span>`;

});

  




