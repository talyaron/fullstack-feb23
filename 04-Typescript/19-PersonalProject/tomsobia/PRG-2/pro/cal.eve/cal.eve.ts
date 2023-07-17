function calculate() {
    const numOfPeopleInput = document.getElementById("numOfPeople") as HTMLInputElement;
    const eventTypeInput = document.getElementById("eventType") as HTMLSelectElement;
    const numOfPeople = parseInt(numOfPeopleInput.value);
  
    if (isNaN(numOfPeople) || numOfPeople <= 0) {
      document.getElementById("result")!.innerText = "Please enter a valid number of people";
      return;
    }
  
    const eventType = eventTypeInput.value;
    const alcoholAmount = calculateAlcoholForEvent(numOfPeople, eventType);
  
    document.getElementById("result")!.innerText = `Alcohol for the event: ${alcoholAmount} liters`;
  }
  
  function calculateAlcoholForEvent(numOfPeople: number, eventType: string): number {
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
  