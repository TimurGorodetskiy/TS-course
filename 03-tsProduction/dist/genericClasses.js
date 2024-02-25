"use strict";
function myFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
const data = {
    connection: 'connection',
    username: 'Tima',
    password: '124',
};
myFunction('myValue', data);
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const sellableCourses = new Sellable();
const jsCourse = {
    name: 'Js',
    author: 'Timur Gorodetsky',
    subject: 'CS',
};
sellableCourses.addToCart(jsCourse);
console.log(sellableCourses.cart);
