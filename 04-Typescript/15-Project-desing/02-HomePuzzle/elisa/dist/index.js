var TimeRecord = /** @class */ (function () {
    function TimeRecord(employeeId, inTime, outTime) {
        this.employeeId = employeeId;
        this.inTime = inTime;
        this.outTime = outTime;
        this.workHours = this.calculateWorkHours();
    }
    //הפונקציה מחשבת את משך השעות
    TimeRecord.prototype.calculateWorkHours = function () {
        var inTimeParts = this.inTime.split(":"); //חלוקה של השעון לשניים ולשים מרכאות בינהם
        var outTimeParts = this.outTime.split(":"); //חלוקה של השעון לשניים ולשים מרכאות בינהם
        var inTimeMinutes = +inTimeParts[0] * 60 + +inTimeParts[1]; // חישוב של כמה דקות יש בכול חלק שפיצלנו: שעה 08:30 נקבל 480+30
        var outTimeMinutes = +outTimeParts[0] * 60 + +outTimeParts[1];
        var workMinutes = outTimeMinutes - inTimeMinutes; // חישוב שעת כניסה פחות שעת יציאה בדקות
        var workHours = Math.floor(workMinutes / 60); //חישוב שעות עבודה בשעות
        var workMins = workMinutes % 60; // השארית תהיה מספר הדקות שעבדנו
        return workHours + "h " + workMins + "m"; //מהנה יפה להצגת שעות העבודה
    };
    return TimeRecord;
}());
var TimeClock = /** @class */ (function () {
    function TimeClock() {
        this.timeRecords = []; // מערך שיחזיק בתוכו את שמני הכניסה כול אובייקט המערך מייצג עובד שהקליד כניסה או יציאה
    }
    TimeClock.prototype.addRecord = function (record) {
        this.timeRecords.push(record);
        this.updateTable(record);
    };
    TimeClock.prototype.updateTable = function (record) {
        var timeData = document.querySelector('#timeData'); //יכולנו לקרוא לזה root בעיקרון זה האלמנט שאליו יכנסו כול השורות שנבנה
        var newRow = timeData.insertRow(); //יצירת שורה חדשה
        var idCell = newRow.insertCell(); // This line creates a new cell in the newly created row and stores a reference to this cell in the idCell variable. This cell will be used for the employee's ID. 
        var inCell = newRow.insertCell(); // This line creates another new cell in the newly created row for the entrance time.
        var outCell = newRow.insertCell(); //This line creates another new cell in the newly created row for the exit time.
        var workHoursCell = newRow.insertCell(); //This line creates another new cell in the newly created row for the work hours.
        idCell.innerText = record.employeeId; //This line sets the text inside the ID cell to the employee's ID from the TimeRecord.
        inCell.innerText = record.inTime; //This line sets the text inside the in-time cell to the employee's in-time from the TimeRecord.
        outCell.innerText = record.outTime; //This line sets the text inside the out-time cell to the employee's out-time from the TimeRecord.
        workHoursCell.innerText = record.workHours; //This line sets the text inside the work-hours cell to the work-hours from the TimeRecord.
    };
    return TimeClock;
}());
// בלוק קוד זה מופעל כאשר דף האינטרנט נטען, ומגדיר את הפונקציונליות עבור מערכת שעון הזמן של העובדים.
window.onload = function () {
    var timeClock = new TimeClock(); //This line creates a new instance of the TimeClock class and assigns it to the timeClock variable.
    var submitBtn = document.querySelector('#submitTime'); //This line selects the HTML element with the id submitTime (which should be a button) and stores a reference to this element in the submitBtn variable.
    submitBtn.onclick = function () {
        var employeeId = document.querySelector('#empId').value;
        var inTime = document.querySelector('#inTime').value;
        var outTime = document.querySelector('#outTime').value;
        var newRecord = new TimeRecord(employeeId, inTime, outTime); //This line creates a new TimeRecord object with the extracted values and assigns it to the newRecord variable.
        timeClock.addRecord(newRecord);
        // Clear input fields after submission
        document.querySelector('#empId').value = "";
        document.querySelector('#inTime').value = "";
        document.querySelector('#outTime').value = "";
    };
};
