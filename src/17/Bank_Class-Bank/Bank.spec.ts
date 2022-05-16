/* eslint-disable unicorn/no-unused-properties */
export {};

// yarn ts-node src/17/Bank_Class-Bank/Bank.spec.ts

interface Transaction {
  from: string
  to: string
  amount: number
}

class Bank {
 name: string
 transactions: Transaction[]
}

const RepublicBank: Bank = {
  name: 'RepBank',
  transactions: [
    from: 'Alex',
    to: 'John',
    amount: 22,
  ]
};

console.log(RepublicBank);
