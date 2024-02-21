enum Roles {
  ADMIN = 'admin',
  GUEST = 'guest',
  LEARNER = 'learner',
}

interface Person {
  readonly _id: string;
  name: string;
  age: number;
  email?: string;
  sayHello(): void;
  getBirthDate(): number;
}

// reopening interface
interface Person {
  gitHubToken: string;
}

interface Admin extends Person {
  role: Roles.ADMIN | Roles.GUEST | Roles.LEARNER;
}

const person: Person = {
  _id: 'sdfsdfsd1',
  name: 'Tima',
  age: 32,
  gitHubToken: 'github',
  sayHello() {
    console.log(`Hello `);
  },
  getBirthDate() {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - this.age;

    return birthYear;
  },
};

const admin: Admin = {
  _id: 'sdfsdfsd1',
  name: 'Tima',
  age: 32,
  gitHubToken: 'github',
  role: Roles.ADMIN,
  sayHello() {
    console.log(`Hello `);
  },
  getBirthDate() {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - this.age;

    return birthYear;
  },
};

const birthYear = person.getBirthDate();

export {};
