function handleSignUpPage(){

    location.href = "/SignUp.html";
}
function handleLoginPage(){

    location.href = "/LogIn.html";
}

// Function to animate the text in the text-container
function animateText(sectionId, sectionTitle, delay) {
    const textContainers = document.querySelectorAll(`#${sectionId} .text-container`);

    textContainers.forEach(textContainer => {
        const automationText = textContainer.querySelector('#automation-text')as HTMLElement;
        const inText = textContainer.querySelector('#in-text') as HTMLElement;
        const sectionTitleElement = textContainer.querySelector('#section-title')as HTMLElement;

        automationText.innerText = 'Automation\n';
        inText.innerText = 'In';
        sectionTitleElement.innerText = sectionTitle;

        textContainer.classList.add('animate');  

        
        // setTimeout(() => {
        //     textContainer.classList.remove('animate');
        // }, 10000); 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let delay = 0; 
    const animationInterval = 1000; 

    function animateSectionsOnLoop() {
        animateText('section1', 'Selenium', delay);
        animateText('section2', 'Playwright', delay);
        animateText('section3', 'WebDriverIO', delay);
        animateText('section4', 'Cypress', delay);
        animateText('section5', 'Jest', delay);
        animateText('section6', 'Puppeteer', delay);
        animateText('section7', 'Appium', delay);
        animateText('section8', 'TestCafe', delay);
        animateText('section9', 'Nightwatch.js', delay);

        delay += animationInterval; 
    }

    animateSectionsOnLoop();

    setInterval(animateSectionsOnLoop, animationInterval * 5);
});

// Anim for hero text
document.addEventListener("DOMContentLoaded", () => {
    const texts = ["DEVELOPER", "AUTOMATION", "PERFORMANCE"];
    let currentIndex = 0;
    const changingTextElement = document.getElementById("changingText");
  
    function changeText() {
      if (changingTextElement) {
        changingTextElement.style.opacity = '0';
        setTimeout(() => {
          changingTextElement.innerText = texts[currentIndex];
          currentIndex = (currentIndex + 1) % texts.length;
          changingTextElement.style.opacity = '1'; 
        }, 500); 
      }
    }
  
    setInterval(changeText, 3000);
  });
  