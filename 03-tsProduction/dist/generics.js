"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
const score = [];
const names = [];
function identityOne(arg) {
    return arg;
}
function identityTwo(arg) {
    return arg;
}
function identityThree(arg) {
    return arg;
}
const identityThreeString = identityThree('arg');
const identityThreeNumber = identityThree(4);
const identityThreeBoolean = identityThree(true);
////////////////////
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//// convert to arrow function from above
const getMoreSearchProducts = (products) => {
    return products[1];
};
