type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  readonly nicknames: string[];
  creditCardDetails?: string;
};

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  expirationDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvvCode: number;
  };

const user: User = {
  _id: '14324jdfg',
  name: 'Timu',
  email: 'tima@gmail.com',
  isActive: true,
  nicknames: ['darling', 'cutie'],
};

console.log(user.nicknames);

export {};
