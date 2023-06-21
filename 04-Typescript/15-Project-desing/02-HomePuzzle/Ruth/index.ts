//----------------Employee--------------
class Employee{
  ID: string;
  constructor(public firstName: string, public lastName: string) {
    this.ID = createID();
  }
}

//--------------Time-----------------
class Time{
    constructor(public hours:number, minutes:number){}
}

//----------------TimeClock--------------
class TimeClock{
    constructor(public date:Date, public entranceTime:Time, public exitTime:Time){}
}

//----------------UserHours---------------
class EmployeeHours{

    constructor(public employee:Employee, public hoursWork:TimeClock[]){}

    addingWorkingHours(workTime:TimeClock){
        this.hoursWork.push(workTime)
    }

    editEntranceTimeByDate(dateToEdit:Date, newEntranceTime:Time){
        this.hoursWork.find(day=>{day.date == dateToEdit})!.entranceTime = newEntranceTime; 
    }
}




//create uniq id by Date, from google...
function createID() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
