var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    return urlParams.get('email');
}
var _email = getEmailFromQuery();
console.log(_email);
showItems(document.querySelector("#items"));
// async function showItems(items: HTMLDivElement) {
//     try {
//       const response = await fetch(`/API/items/getItems`);
//       const itemData = await response.json(); // Assuming the API returns an object
//       console.log(itemData);
//       // Create an HTML structure for displaying the item data
//       const itemHTML = `
//         <div class="itemName">${itemData.itemName}</div>
//         <div class="itemDesc">${itemData.itemDesc}</div>
//         <img src="${itemData.itemUrl}>
//         // <div class="itemImg">${itemData.itemUrl}</div>
//       `;
//       // Append the HTML to the 'items' div
//       items.innerHTML = itemHTML;
//     } catch (error) {
//       console.error(error);
//     }
//   }
function showItems(itemsContainer) {
    return __awaiter(this, void 0, void 0, function () {
        var response, items, itemHTML, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/items/getItems")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    items = (_a.sent()).items;
                    console.log(items);
                    itemHTML = items.map(function (item) { return "\n        <div class=\"item\">\n          <div class=\"itemName\">" + item.itemName + "</div>\n          <div class=\"itemDesc\">" + item.itemDesc + "</div>\n          <img src=\"" + item.itemUrl + "\" id=\"img\" alt=\"" + item.itemName + "\" />\n          <form onsubmit=\"handlecreateOrder(event)\">\n          <button type=\"submit\">Add to Order</button>\n          <button type=\"delete\">Remove from Order</button>\n      </form>\n        </div>\n      "; }).join('');
                    // Set the HTML content of the itemsContainer
                    itemsContainer.innerHTML = itemHTML;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
