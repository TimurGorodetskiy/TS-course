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
  constructor(
    public name: string,
    public email: string,
    public age: number,
    private city: string = 'Almaty'
  ) {}

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email},Age: ${this.age}.He is from ${this.city}`;
  }

  get getEmailInfo(): string {
    return this.email;
  }

  set setEmail(newEmail: string) {
    this.email = newEmail;
  }

  protected getAccessStatus() {
    console.log('getAccessStatus');
  }
}

class Admin extends User {
  constructor(
    public name: string,
    public email: string,
    public age: number,
    private isAdmin: boolean = true
  ) {
    super(name, email, age);
  }

  getAdminStatus(): boolean {
    this.getAccessStatus();
    return this.isAdmin;
  }
}

const employees: [string, string, number][] = [
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
