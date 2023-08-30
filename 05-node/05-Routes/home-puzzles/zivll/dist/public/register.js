var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleRegister(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const user = {
                email: event.target.email.value,
                password: event.target.password.value,
            };
            const response = yield fetch("/API/users/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
//# sourceMappingURL=register.js.map