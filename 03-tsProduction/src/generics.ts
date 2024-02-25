import { StringMap } from 'i18next';

function identity<Type>(arg: Type): Type {
  return arg;
}

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(arg: string | boolean): string | boolean {
  return arg;
}

function identityTwo(arg: any): any {
  return arg;
}

function identityThree<Type>(arg: Type): Type {
  return arg;
}

const identityThreeString = identityThree<string>('arg');
const identityThreeNumber = identityThree<number>(4);
const identityThreeBoolean = identityThree<boolean | string>(true);

////////////////////
function getSearchProducts<T>(products: T[]): T {
  // do some database operations

  const myIndex = 3;
  return products[myIndex];
}

//// convert to arrow function from above

const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[1];
};
