var person = {
    name: 'Tima',
    age: 32,
    sayHello: function () {
        console.log("Hello ");
    },
    getBirthDate: function () {
        var currentYear = new Date().getFullYear();
        var birthYear = currentYear - this.age;
        return birthYear;
    },
};
var birthYear = person.getBirthDate();
console.log(birthYear);
