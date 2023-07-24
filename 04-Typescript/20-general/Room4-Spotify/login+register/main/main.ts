function getGreetingByTimeOfDay(rootElement: HTMLElement | null, currentTime: Date): void {
    const hours = currentTime.getHours();
    let greeting = "";

    if (hours >= 23 || hours < 4) {
        greeting = "Good Night";
    } else if (hours >= 5 && hours < 12) {
        greeting = "Good Morning";
    } else if (hours >= 13 && hours < 18) {
        greeting = "Good Afternoon";
    } else if (hours >= 19 && hours < 22) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Day"; // Just in case there's an error or unexpected input
    }

    if (rootElement) {
        rootElement.innerText = greeting;
    }
}

// Example usage:
const headerElement: HTMLElement |null = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());
