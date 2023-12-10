"use strict";
exports.__esModule = true;
require("./App.css");
var WindowSize_1 = require("./components/windowSize/WindowSize");
var CountdownTimer_1 = require("./components/countdownTimer/CountdownTimer");
var TitleTask_1 = require("./components/titleTask/TitleTask");
var Practice_1 = require("./components/practice/Practice");
var react_1 = require("react");
// # advanced
// 1. Create a UserCard component that fetches data from JSONPlaceholder API (https://jsonplaceholder.typicode.com/). show the users in app.tsx.
// 2. create UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). Add this component to each user card, and only show it after that user card has been clicked. show this component only when the user card is clicked.
// # Expactions
// 1.  Each of the components should only fetch data when it mounts.
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TitleTask_1["default"], null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(CountdownTimer_1["default"], null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(WindowSize_1["default"], null),
        react_1["default"].createElement(Practice_1["default"], null),
        react_1["default"].createElement(WindowSize_1["default"], null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("ul", null, users.map(function (user) { return (react_1["default"].createElement("p", { key: user.id }, user.name)); })))));
}
exports["default"] = App;
// function App() {
//   const [title, setTitle] = useState("Hello user")
//   const [counter, setCounter] = useState(0)
//   useEffect(() => {
//     document.title = `${title}`
//     console.log("Hello Doriel")
//   }, [counter])
//   useEffect(() => {
//     console.log("on Mount")
//     setCounter((prev) => prev + 1)
//     document.title += {prev}
//   }, [setTitle])
//   return (
//     <>
//       {/* <input value={title} onInput={(ev) => { setTitle((ev.target as HTMLInputElement).value) }} /> */}
//       <button onClick={() => {setCounter(counter + 1)}}>+</button>
//     </>
//   )
// }
// export default App
