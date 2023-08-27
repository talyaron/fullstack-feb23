"use strict";

exports.__esModule = true;
exports.Task = void 0;

var Task =
/** @class */
function () {
  function Task(user, title, description, status) {
    this.user = user;
    this.title = title;
    this.description = description;
    this.status = status;
    this.id = Math.random().toString();
  }

  return Task;
}();

exports.Task = Task;