//MODEL
var Employee = /** @class */ (function () {
    function Employee(employeeID, firsName, lastName) {
        this.employeeID = employeeID;
        this.firsName = firsName;
        this.lastName = lastName;
    }
    return Employee;
}());
var employees = [];
employees.push(new Employee(20156, "shiran", "lasry"));
employees.push(new Employee(20123, "david", "levy"));
console.log(employees);
var TimeClock = /** @class */ (function () {
    function TimeClock(employee, status, enterTime, exitTime) {
        this.employee = employee;
        this.status = status;
        this.enterTime = enterTime;
        this.exitTime = exitTime;
    }
    TimeClock.prototype.calkWorkTime = function () {
        try {
            if (!this.exitTime || !this.enterTime)
                throw new Error("missing enter or exit");
            debugger;
            var millisecondsPerHour = 1000 * 60 * 60; // Number of milliseconds in an hour
            var enterTimestamp = this.enterTime.getTime(); // Get the enter time as a timestamp
            var exitTimestamp = this.exitTime.getTime(); // Get the exit time as a timestamp
            if (enterTimestamp > exitTimestamp) {
                throw new Error("Invalid time range: enter time cannot be after exit time.");
            }
            var workTimeMilliseconds = exitTimestamp - enterTimestamp;
            var workTimeHours = workTimeMilliseconds / millisecondsPerHour;
            return workTimeHours;
        }
        catch (error) {
            return 0;
            console.error(error);
        }
    };
    return TimeClock;
}());
var employeesTimeClock = [];
// view CONTROLERS
var LogINDiv = document.querySelector("#LogIN");
var AddNewWorkerDiv = document.querySelector("#AddNewWorker");
var clockiDiv = document.querySelector("#clocki");
var ShowDetailsbtns = document.querySelector("#ShowDetailsbtns");
var ShowDetails = document.querySelector("#ShowDetails");
var setionID = null;
function renderEmployeeLogIN(rootElement) {
    try {
        var html = " <form class=\"LoginDiv\" onsubmit=\"handleLogIN(event)\">\n        <label>LogIn</label>\n        <input type=\"text\" name=\"employeeID\" id='employeeID' placeholder=\"ENERT ID\" required>\n        <input type=\"submit\" value=\"ENTER\">\n    </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function RenderClock(rootElement) {
    try {
        var html = "<form>\n        <button type=\"button\" onclick=\"saveDateTime('enter')\">Enter</button>\n        <button type=\"button\" onclick=\"saveDateTime('exit')\">Exit</button>\n      </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function RenderBtnsDetails(rootElement) {
    try {
        var html = "<form>\n        <button type=\"button\" onclick=\"RenderIdForSerchEmployee()\">serach ID</button>\n        <button type=\"button\" onclick=\"RenderShowByDate()\">serach Date</button>\n        </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function RenderShowByDate() {
    try {
        if (LogINDiv) {
            LogINDiv.innerHTML = "";
        } // Remove all HTML content
        if (AddNewWorkerDiv) {
            AddNewWorkerDiv.innerHTML = "";
        }
        var html = "<form  onsubmit=\"ShowByDate(event)\">\n        <input type=\"Date\" name=\"DateToSearch\" id='DateToSearch' placeholder=\"Choose Date\" required>\n        <input type=\"submit\" value=\"Search\">\n        <button type=\"button\" onclick=\"RenderHomePage()\">Back</button>\n    </form>";
        if (!ShowDetailsbtns)
            throw new Error("No root element");
        ShowDetailsbtns.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function ShowByDate(event) {
    try {
        event.preventDefault();
        var dateToSearch_1 = event.target.DateToSearch.valueAsDate; // get date from target
        // Filter employee time clock entries by the specified date
        var employeeTimesClockByDate = employeesTimeClock.filter(function (employeeTime) {
            return employeeTime.enterTime.toDateString() === (dateToSearch_1 === null || dateToSearch_1 === void 0 ? void 0 : dateToSearch_1.toDateString());
        });
        if (ShowDetails) {
            ShowDetails.innerHTML = ""; // Remove all content before rendering the table
            if (employeeTimesClockByDate.length > 0) {
                // Generate HTML elements and append them to the ShowDetails element
                var ul = document.createElement("ul");
                // Create a table for displaying details
                var table_1 = document.createElement("table");
                table_1.innerHTML = "\n            <tr>\n              <th>Employee ID</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Enter</th>\n              <th>Exit</th>\n              <th>Total</th>\n            </tr>\n          ";
                // Iterate over the employee's time clock entries
                employeeTimesClockByDate.forEach(function (employeeTime) {
                    var employee = employeeTime.employee, enterTime = employeeTime.enterTime, exitTime = employeeTime.exitTime, calkWorkTime = employeeTime.calkWorkTime;
                    var row = document.createElement("tr");
                    // Employee ID
                    var idCell = document.createElement("td");
                    idCell.textContent = employee.employeeID.toString();
                    row.appendChild(idCell);
                    // First Name
                    var firstNameCell = document.createElement("td");
                    firstNameCell.textContent = employee.firsName;
                    row.appendChild(firstNameCell);
                    // Last Name
                    var lastNameCell = document.createElement("td");
                    lastNameCell.textContent = employee.lastName;
                    row.appendChild(lastNameCell);
                    // Enter Time
                    var enterTimeCell = document.createElement("td");
                    enterTimeCell.textContent = enterTime.toLocaleTimeString();
                    row.appendChild(enterTimeCell);
                    // Exit Time
                    var exitTimeCell = document.createElement("td");
                    exitTimeCell.textContent = exitTime
                        ? exitTime.toLocaleTimeString()
                        : "-";
                    row.appendChild(exitTimeCell);
                    // Hours per Day
                    var hoursPerDayCell = document.createElement("td");
                    hoursPerDayCell.textContent = exitTime
                        ? Math.floor(calkWorkTime()) + " hours"
                        : "-";
                    row.appendChild(hoursPerDayCell);
                    table_1.appendChild(row);
                });
                ul.appendChild(table_1);
                ShowDetails.appendChild(ul);
            }
            else {
                var errorMessage = document.createElement("p");
                errorMessage.textContent = "No records found for the given date.";
                ShowDetails.appendChild(errorMessage);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function RenderIdForSerchEmployee() {
    try {
        if (LogINDiv) {
            LogINDiv.innerHTML = "";
        } // Remove all HTML content
        if (AddNewWorkerDiv) {
            AddNewWorkerDiv.innerHTML = "";
        }
        var html = "<form  onsubmit=\"ShowByID(event)\">\n        <input type=\"number\" name=\"SearchID\" id='SearchID' placeholder=\"Search ID\" required>\n        <input type=\"submit\" value=\"Search\">\n        <button type=\"button\" onclick=\"RenderHomePage()\">Back</button>\n    </form>";
        if (!ShowDetailsbtns)
            throw new Error("No root element");
        ShowDetailsbtns.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function RenderHomePage() {
    if (ShowDetailsbtns)
        RenderBtnsDetails(ShowDetailsbtns);
    if (AddNewWorkerDiv)
        renderAddEmployee(AddNewWorkerDiv);
    if (LogINDiv)
        renderEmployeeLogIN(LogINDiv);
    if (ShowDetails) {
        ShowDetails.innerHTML = "";
    }
    //if (ShowDetailsbtns) ShowDetailsbtns.innerHTML = ``;          
}
function resetAddEmployeeForm() {
    var form = document.querySelector("#addEmployeeForm");
    if (form) {
        form.reset();
    }
}
function renderAddEmployee(rootElement) {
    try {
        var html = "<form class=\"AddNewDiv\" onsubmit=\"handAddEmployee(event)\" id=\"addEmployeeForm\">\n        <label>Add New Employee</label>\n        <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"First Name:\" required>\n        <input type=\"text\" name=\"lastName\" id='lastName' placeholder=\"Last Name:\" required>\n        <input type=\"number\" name=\"newId\" id='newId' placeholder=\"ID:\" required>\n        <input type=\"submit\" value=\"ADD\">\n    </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function ShowByID(event) {
    try {
        event.preventDefault();
        var id_1 = event.target.SearchID.valueAsNumber; // get id from target
        // filter to find employee times clock in employees time clock array with target id
        var employeeTimesClockByID = employeesTimeClock.filter(function (employeeTime) { return employeeTime.employee.employeeID === id_1; });
        if (ShowDetails) {
            ShowDetails.innerHTML = "";
        } //remove all content before render table
        // Generate HTML elements and append to ShowDetails element
        var ul = document.createElement("ul");
        // Add full name as a title
        if (employeeTimesClockByID.length > 0) {
            var fullName = employeeTimesClockByID[0].employee.firsName + " " + employeeTimesClockByID[0].employee.lastName;
            var fullNameElement = document.createElement("h2");
            fullNameElement.textContent = "" + fullName;
            ul.appendChild(fullNameElement);
            // Create a table for displaying details
            var table_2 = document.createElement("table");
            table_2.innerHTML = "\n            <tr>\n              <th>Date</th>\n              <th>Enter</th>\n              <th>Exit</th>\n              <th>Total</th>\n            </tr>\n          ";
            // Iterate over the employee's time clock entries
            employeeTimesClockByID.forEach(function (employeeTime) {
                var enterTime = employeeTime.enterTime, exitTime = employeeTime.exitTime; // declare exit and enter
                var row = document.createElement("tr");
                // Date
                var dateCell = document.createElement("td");
                dateCell.textContent = enterTime.toDateString();
                row.appendChild(dateCell);
                // Enter Time
                var enterTimeCell = document.createElement("td");
                enterTimeCell.textContent = enterTime.toLocaleTimeString();
                row.appendChild(enterTimeCell);
                // Exit Time
                var exitTimeCell = document.createElement("td");
                exitTimeCell.textContent = exitTime ? exitTime.toLocaleTimeString() : "-";
                row.appendChild(exitTimeCell);
                // Hours per Day
                var hoursPerDayCell = document.createElement("td");
                hoursPerDayCell.textContent = exitTime
                    ? Math.floor(employeeTime.calkWorkTime()) + " hours"
                    : "-";
                row.appendChild(hoursPerDayCell);
                table_2.appendChild(row);
            });
            ul.appendChild(table_2);
        }
        else {
            var errorMessage = document.createElement("p");
            errorMessage.textContent = "No records found for the given employee ID.";
            ul.appendChild(errorMessage);
        }
        if (ShowDetails) {
            ShowDetails.appendChild(ul);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handAddEmployee(event) {
    try {
        event.preventDefault();
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var id_2 = event.target.newId.valueAsNumber;
        if (!firstName || !lastName || !id_2) {
            alert("invalid data");
            throw new Error("invalid data");
        }
        //set new employee
        var newEmployee = new Employee(id_2, firstName, lastName);
        // check if there is employee with same id 
        var employeeExists = employees.find(function (employee) { return employee.employeeID === id_2; });
        if (employeeExists) { // if true do nothing
            alert('Employee exists!');
        }
        else { // push new employee
            employees.push(newEmployee);
            alert('Add Employee sucsess!');
            // reset form input
            resetAddEmployeeForm();
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogIN(event) {
    try {
        event.preventDefault();
        setionID = event.target.employeeID.value;
        // find employee with target id
        var employeeLG = employees.find(function (employee) {
            return Number(employee.employeeID) === Number(setionID);
        });
        if (!employeeLG) {
            alert('Employee NOt Exists');
            setionID = null;
            throw new Error("Employee NOt Exists");
        }
        if (LogINDiv) {
            LogINDiv.innerHTML = "";
        } // Remove all HTML content and render clock btns
        if (AddNewWorkerDiv) {
            AddNewWorkerDiv.innerHTML = "";
        }
        if (ShowDetailsbtns) {
            ShowDetailsbtns.innerHTML = "";
        }
        RenderClock(clockiDiv);
    }
    catch (error) {
        console.error(error);
    }
}
function saveDateTime(action) {
    try {
        var currentDateTime = new Date();
        var dateTime = currentDateTime.toLocaleString();
        if (action === 'enter') {
            var time = localStorage.setItem('enterDateTime', dateTime);
            if (setionID) {
                //get employee
                var emploeeybyID = employees.find(function (emploeey) { return emploeey.employeeID === Number(setionID); });
                if (!emploeeybyID) {
                    throw new Error("cant find Employee with id " + setionID);
                }
                // check if employee alardy sing enter => if he have line in the array with statuse true
                var checkStatus = employeesTimeClock.find(function (employeeTime) { return employeeTime.employee.employeeID
                    === Number(setionID) && employeeTime.status == true; });
                if (checkStatus)
                    alert('Need To Exit First ');
                else {
                    // if not - push new line to array
                    var newtimeclock = new TimeClock(emploeeybyID, true, currentDateTime, null);
                    employeesTimeClock.push(newtimeclock);
                    alert('Enter date and time saved: ' + dateTime);
                    // reset sestion
                    setionID = null;
                }
                if (clockiDiv) {
                    clockiDiv.innerHTML = "";
                } // Remove all HTML content for enter and exit btns
                RenderHomePage();
            }
        }
        else if (action === 'exit') {
            // find the line of the employee with status true
            var employeeIndex = employeesTimeClock.findIndex(function (employeeTime) {
                return employeeTime.employee.employeeID === Number(setionID) && employeeTime.status == true;
            });
            if (employeeIndex == -1) {
                alert('Enter Time Not Declare:');
            } //if there is no index=> the emlpoyee not sing enter
            else // update exit time and status
             {
                employeesTimeClock[employeeIndex].exitTime = currentDateTime;
                employeesTimeClock[employeeIndex].status = false;
                alert('Exit date and time saved: ' + dateTime);
            }
            if (clockiDiv) {
                clockiDiv.innerHTML = "";
            } // Remove all HTML content
            RenderHomePage();
        }
    }
    catch (error) {
        console.error(error);
    }
}
RenderHomePage();
