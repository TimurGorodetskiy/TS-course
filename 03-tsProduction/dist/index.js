"use strict";
// class User {
//   email: string;
//   name: string;
//   private city: string = 'Almaty';
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
//   getInfo(): string {
//     return `Name: ${this.name}, Email: ${this.email},Age: ${this.age}.He is from ${this.city}`;
//   }
// }
class User {
    constructor(name, email, age, city = 'Almaty') {
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
    }
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email},Age: ${this.age}.He is from ${this.city}`;
    }
    get getEmailInfo() {
        return this.email;
    }
    set setEmail(newEmail) {
        this.email = newEmail;
    }
    getAccessStatus() {
        console.log('getAccessStatus');
    }
}
class Admin extends User {
    constructor(name, email, age, isAdmin = true) {
        super(name, email, age);
        this.name = name;
        this.email = email;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    getAdminStatus() {
        this.getAccessStatus();
        return this.isAdmin;
    }
}
const employees = [
    ['tima', 'tima@gmail.com', 30],
    ['jhon', 'jhon@example.com', 12],
    ['thor', 'thor@marvel.com', 26],
];
const objects = employees.map((employee) => {
    return new User(employee[0], employee[1], employee[2]);
});
for (let object of objects) {
    console.log(object.getInfo());
}
