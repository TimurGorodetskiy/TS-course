"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1, num2) {
    return num1 + num2;
}
var addTwoString = addTwo(5, 10);
function signUpUser(name, email, isPaid) { }
function loginUser(name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser('Tima', 'tima@gmail.com', true);
loginUser('Jhon', '123');
// 2 types
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 OK';
}
// arrow function
var getHello = function () {
    return 'hello';
};
// arrays
var carsBrands = ['Mercedes', 'BMW', 'Peugeot', 'Audi'];
carsBrands.map(function (carBrand) {
    return "car brand is ".concat(carBrand);
});
// void
function consoleError(errorMsg) {
    console.log(errorMsg);
}
