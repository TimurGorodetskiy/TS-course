type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: string;
};

let user: User | Admin = {
  username: 'Timur',
  id: 'sdfsdfsdf',
};

user = {
  name: 'Anton',
  id: 24124,
};

// function getDBId(id: string): string | boolean {
//   if (id) {
//     return 'found and id';
//   } else {
//     return false;
//   }
// }

function getDBId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

getDBId(2342432);
getDBId('sdfsd342323');

const data: number[] = [1, 23, 4, 5];
const data2: string[] = ['2.4', '45', '345'];
const data3: (string | number)[] = [29, 'sdf'];

let pi: 3.14 = 3.14;

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'window';

export {};
