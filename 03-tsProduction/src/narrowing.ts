function padLeft(padding: string | number, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft('//////', 'Hello World'));

type Bird = { fly: () => void };
type Fish = { swim: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Bird | Fish | Human) {
  if ('swim' in animal) {
    animal;
  } else {
    animal;
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ('isAdmin' in account) {
    account;
  } else {
    account;
  }
}

export {};
