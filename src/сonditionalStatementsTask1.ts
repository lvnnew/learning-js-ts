/* eslint-disable prefer-const */
import {log} from './log';

// yarn ts-node src/сonditionalStatementsTask1.ts

// let operation = 'add';

let operation = 'substract';
let val1 = 5;
let val2 = 10;

const app = () => {
  if (operation === 'add') {
    log.info(val1 + val2);
  } else if (operation === 'substract') {
    log.info(val1 - val2);
  }
};

app();
