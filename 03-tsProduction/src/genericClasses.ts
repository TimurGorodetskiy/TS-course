interface Database {
  connection: string;
  username: string;
  password: string;
}

function myFunction<T, U extends Database>(valOne: T, valTwo: U): object {
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

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const sellableCourses = new Sellable<Course>();

const jsCourse = {
  name: 'Js',
  author: 'Timur Gorodetsky',
  subject: 'CS',
};

sellableCourses.addToCart(jsCourse);

console.log(sellableCourses.cart);
