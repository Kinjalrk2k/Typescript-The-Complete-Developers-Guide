"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"]
    .get(url)
    .then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
})["catch"](function (error) {
    console.error("Error", error);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is is completed? ").concat(completed, "\n"));
};
