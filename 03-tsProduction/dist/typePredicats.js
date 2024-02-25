"use strict";
function isBird(pet) {
    return pet.fly !== undefined;
}
function getFood(pet) {
    if (isBird(pet)) {
        return "It's a Bird food";
    }
    else {
        return "It's a FISH food";
    }
}
const eagle = {
    name: 'Eagle',
    fly() {
        console.log("It's called from object eagle");
    },
};
const shark = {
    name: 'White Shark',
    swim() { },
};
console.log(getFood(eagle));
