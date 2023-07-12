class TimeRecord {
  employeeId: string;
  inTime: string;
  outTime: string;
  workHours: string;

  constructor(employeeId: string, inTime: string, outTime: string) {
      this.employeeId = employeeId;
      this.inTime = inTime;
      this.outTime = outTime;
      this.workHours = this.calculateWorkHours();
  }
 //הפונקציה מחשבת את משך השעות
  calculateWorkHours() {
      let inTimeParts = this.inTime.split(":"); //חלוקה של השעון לשניים ולשים מרכאות בינהם
      let outTimeParts = this.outTime.split(":"); //חלוקה של השעון לשניים ולשים מרכאות בינהם

      let inTimeMinutes = +inTimeParts[0] * 60 + +inTimeParts[1]; // חישוב של כמה דקות יש בכול חלק שפיצלנו: שעה 08:30 נקבל 480+30
      let outTimeMinutes = +outTimeParts[0] * 60 + +outTimeParts[1];

      let workMinutes = outTimeMinutes - inTimeMinutes;// חישוב שעת כניסה פחות שעת יציאה בדקות
      
      let workHours = Math.floor(workMinutes / 60); //חישוב שעות עבודה בשעות
      let workMins = workMinutes % 60;// השארית תהיה מספר הדקות שעבדנו
      
      return workHours + "h " + workMins + "m"; //מהנה יפה להצגת שעות העבודה
  }
}
class TimeClock {
  timeRecords: TimeRecord[] = []; // מערך שיחזיק בתוכו את שמני הכניסה כול אובייקט המערך מייצג עובד שהקליד כניסה או יציאה

  addRecord(record: TimeRecord) {
      this.timeRecords.push(record);
      this.updateTable(record);
  }
  
  updateTable(record: TimeRecord) {// This is a method of the TimeClock class. This function takes a TimeRecord object as an argument.
      const timeData = document.querySelector('#timeData') as HTMLTableSectionElement; //יכולנו לקרוא לזה root בעיקרון זה האלמנט שאליו יכנסו כול השורות שנבנה
      const newRow = timeData.insertRow(); //יצירת שורה חדשה
      const idCell = newRow.insertCell(); // This line creates a new cell in the newly created row and stores a reference to this cell in the idCell variable. This cell will be used for the employee's ID. 
      const inCell = newRow.insertCell();// This line creates another new cell in the newly created row for the entrance time.
      const outCell = newRow.insertCell();//This line creates another new cell in the newly created row for the exit time.
      const workHoursCell = newRow.insertCell();//This line creates another new cell in the newly created row for the work hours.

      idCell.innerText = record.employeeId; //This line sets the text inside the ID cell to the employee's ID from the TimeRecord.
      inCell.innerText = record.inTime;//This line sets the text inside the in-time cell to the employee's in-time from the TimeRecord.
      outCell.innerText = record.outTime; //This line sets the text inside the out-time cell to the employee's out-time from the TimeRecord.
      workHoursCell.innerText = record.workHours;//This line sets the text inside the work-hours cell to the work-hours from the TimeRecord.
  }
}
// בלוק קוד זה מופעל כאשר דף האינטרנט נטען, ומגדיר את הפונקציונליות עבור מערכת שעון הזמן של העובדים.
window.onload = () => {
  const timeClock = new TimeClock(); //This line creates a new instance of the TimeClock class and assigns it to the timeClock variable.

  const submitBtn = document.querySelector('#submitTime') as HTMLButtonElement; //This line selects the HTML element with the id submitTime (which should be a button) and stores a reference to this element in the submitBtn variable.
  submitBtn.onclick = () => { //This code sets an event handler for the click event on the submitBtn. When the button is clicked, it will execute the anonymous arrow function () => {}.
      const employeeId = (document.querySelector('#empId') as HTMLInputElement).value;
      const inTime = (document.querySelector('#inTime') as HTMLInputElement).value;
      const outTime = (document.querySelector('#outTime') as HTMLInputElement).value;
      const newRecord: TimeRecord = new TimeRecord(employeeId, inTime, outTime);//This line creates a new TimeRecord object with the extracted values and assigns it to the newRecord variable.
      timeClock.addRecord(newRecord);

      // Clear input fields after submission
      (document.querySelector('#empId') as HTMLInputElement).value = "";
      (document.querySelector('#inTime') as HTMLInputElement).value = "";
      (document.querySelector('#outTime') as HTMLInputElement).value = "";
  };
};

