//classes
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.id = new Date().getTime() + "-" + Math.random();
        this.notes = [];
    }
    return User;
}());
var Note = /** @class */ (function () {
    function Note(color, text) {
        this.color = color;
        this.text = text;
        this.id = new Date().getTime() + "-" + Math.random();
        this.isEdit = false;
    }
    Note.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Note;
}());
