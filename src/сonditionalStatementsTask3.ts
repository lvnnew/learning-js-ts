/* eslint-disable prefer-const */
import {log} from './log';

// yarn ts-node src/сonditionalStatementsTask3.ts

let val1 = 10;
let val2 = 10;

const app = () => {
  if (val1 > val2) {
    log.info('первое число больше второго');
  } else if (val1 < val2) {
    log.info('первое число меньше второго');
  } else {
    log.info('числа равны');
  }
};

app();
