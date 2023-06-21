//----------------User--------------
class User{
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
class UserHours{
    constructor(public user:User, public hoursWork:TimeClock[]){}

    addingWorkingHours(workTime:TimeClock){
        this.hoursWork.push(workTime)
    }
}

//create uniq id by Date, from google...
function createID() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
