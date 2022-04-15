/* eslint-disable no-console */
/* eslint-disable prefer-const */
export {};

// yarn ts-node src/functionsTask3.ts

const nevilleLongbottom = {
  str: 'Yes, sir, i`ll bring her home by 7pm',
};

function printStr() {
  console.log('Было', nevilleLongbottom.str);
  nevilleLongbottom.str = 'Your daughter calls me daddy too';
  console.log('Стало', nevilleLongbottom.str);
}

printStr();

