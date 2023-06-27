//בניית הטבלה
const tableMain = document.createElement("table");    // Create table element
const headerRow = document.createElement("tr");   // Create table header row

const headers = ["Entry Time", "Exit Time", "Hours Worked"];   // Create table header cells
for (const headerText of headers) {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
}
tableMain.appendChild(headerRow); // Append the header row to the table
const dataRow = document.createElement("tr");// Create data row

for (let i = 0; i < headers.length; i++) {   // Create empty data cells
  const dataCell = document.createElement("td");
  dataRow.appendChild(dataCell);
}
tableMain.appendChild(dataRow);
document.body.appendChild(tableMain);
// יצירת הקלאס ושעות הכניסה והיציאה
class TimeClock {
  constructor(public entryTime: Date | null, public exitTime: Date | null) {
    this.entryTime = null;
    this.exitTime = null;
  }

  getHoursWorked() {
    if (this.entryTime && this.exitTime) {
      return (this.exitTime.getTime() - this.entryTime.getTime()) / 360000;
    } else {
      return null;
    }
  }
}
const timeClock = new TimeClock(null, null);
const entryTimeButton = document.querySelector("#entry-time") as HTMLButtonElement;
const exitTimeButton = document.querySelector("#exit-time")as HTMLButtonElement;
// const table1 = document.querySelector("table") as HTMLTableElement;

entryTimeButton.addEventListener("click", () => {
  timeClock.entryTime = new Date();
  tableMain.rows[1].cells[0].innerHTML = timeClock.entryTime.toLocaleString();
});

exitTimeButton.addEventListener("click", () => {
  timeClock.exitTime = new Date();
  tableMain.rows[1].cells[1].innerHTML = timeClock.exitTime.toLocaleString();
  tableMain.rows[1].cells[2].innerHTML = timeClock.getHoursWorked()?.toFixed(2);
});
