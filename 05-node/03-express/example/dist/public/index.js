var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("index is ready");
//create a function the get then name from the server and render to root element
//async await
const getName = () => __awaiter(this, void 0, void 0, function* () {
    console.time("fetching name");
    // "/name" is a route in the server
    const response = yield fetch("/name"); //wait for the response from server
    console.timeEnd("fetching name");
    console.log(response);
    const data = yield response.json(); //wait for the data to be parsed
    console.log(data);
    document.querySelector("#root").innerHTML = data.name;
});
getName();
const getFamily = () => __awaiter(this, void 0, void 0, function* () {
    console.time("fetching family");
    // "/family" is a route in the server
    const response = yield fetch("/family"); //wait for the response from server
    console.timeEnd("fetching family");
    console.log(response);
    const data = yield response.json(); //wait for the data to be parsed
    console.log(data);
    document.querySelector("#rootFamily").innerHTML = data.family;
});
getFamily();
//# sourceMappingURL=index.js.map