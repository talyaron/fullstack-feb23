"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express_1 = __importDefault(require("express"));

var mongoose_1 = __importDefault(require("mongoose"));

var app = express_1["default"]();
var port = process.env.PORT || 3000; //static files

app.use(express_1["default"]["static"]("public")); //body

app.use(express_1["default"].json()); //connect to mongoDB with mongoose

mongoose_1["default"].connect("mongodb+srv://athegreat5:4VspRIIT6N27mtbn@cluster0.g7gvful.mongodb.net/test").then(function () {
  console.info("MongoDB connected");
})["catch"](function (err) {
  console.error(err);
}); //router to products
// get router from userRouter

var userRoutes_1 = __importDefault(require("./API/users/userRoutes")); // //tells express to use userRouter on the intial route "/API/users"


app.use("/API/users", userRoutes_1["default"]); // import tasksRouter from "./API/tasks/tasksRoutes";
// app.use("/API/tasks", tasksRouter);

app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});