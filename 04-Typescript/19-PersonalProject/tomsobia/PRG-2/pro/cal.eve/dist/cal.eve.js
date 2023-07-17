function calculate() {
    var numOfPeopleInput = document.getElementById("numOfPeople");
    var eventTypeInput = document.getElementById("eventType");
    var numOfPeople = parseInt(numOfPeopleInput.value);
    if (isNaN(numOfPeople) || numOfPeople <= 0) {
        document.getElementById("result").innerText = "Please enter a valid number of people";
        return;
    }
    var eventType = eventTypeInput.value;
    var alcoholAmount = calculateAlcoholForEvent(numOfPeople, eventType);
    document.getElementById("result").innerText = "Alcohol for the event: " + alcoholAmount + " liters";
}
function calculateAlcoholForEvent(numOfPeople, eventType) {
    switch (eventType) {
        case "group":
            return numOfPeople * 0.3; // Group of Friends - 0.3 liters per person
        case "wedding":
            return numOfPeople * 0.5; // Wedding - 0.5 liters per person
        case "birthday":
            return numOfPeople * 0.2; // Birthday Party - 0.2 liters per person
        default:
            return 0;
    }
}
