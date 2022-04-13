/* eslint-disable prefer-const */
import {log} from './log';

// yarn ts-node src/сonditionalStatementsTask2.ts

let first = 0;
let val1 = 20;
let val2 = 10;

const app = () => {
  if (first === 20) {
    log.info(first + val1 + val2);
  } else if (first === 0 || -5) {
    log.info(val1 - val2);
  }
};

app();
