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
const table = document.querySelector("table") as HTMLTableElement;

entryTimeButton.addEventListener("click", () => {
  timeClock.entryTime = new Date();
  table.rows[1].cells[0].innerHTML = timeClock.entryTime.toLocaleString();
});

exitTimeButton.addEventListener("click", () => {
  timeClock.exitTime = new Date();
  table.rows[1].cells[1].innerHTML = timeClock.exitTime.toLocaleString();
  table.rows[1].cells[2].innerHTML = timeClock.getHoursWorked()?.toFixed(2);
});
