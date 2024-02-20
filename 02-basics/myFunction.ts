function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}

let addTwoString = addTwo(5, 10);

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, password: string, isPaid: boolean = false) {}

signUpUser('Tima', 'tima@gmail.com', true);

loginUser('Jhon', '123');

// 2 types

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }

  return '200 OK';
}

// arrow function

const getHello = (): string => {
  return 'hello';
};

// arrays

const carsBrands = ['Mercedes', 'BMW', 'Peugeot', 'Audi'];

carsBrands.map((carBrand): string => {
  return `car brand is ${carBrand}`;
});

// void

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}

export {};
