var Physician = /** @class */ (function () {
    function Physician(firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin, _id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.email = email;
        this.licenseNumber = licenseNumber;
        this.password = password;
        this.isAdmin = isAdmin;
        this._id = _id;
    }
    return Physician;
}());
var Patient = /** @class */ (function () {
    function Patient(firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId, _id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patientId = patientId;
        this.age = age;
        this.phoneNum = phoneNum;
        this.weight = weight;
        this.height = height;
        this.smoking = smoking;
        this.address = address;
        this.physicianId = physicianId;
        this._id = _id;
    }
    return Patient;
}());
var Medicine = /** @class */ (function () {
    function Medicine(name, dosagePerDay, maxDuration, _id) {
        this.name = name;
        this.dosagePerDay = dosagePerDay;
        this.maxDuration = maxDuration;
        this._id = _id;
    }
    return Medicine;
}());
