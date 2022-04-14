/* eslint-disable no-console */
import {log} from './log';

// yarn ts-node src/functionsTask1.ts

function sumInt (val1: number, val2: number) {
  return (val1 + val2);
}

console.log(sumInt(10, 30));

const app = async () => {
  log.info();
};

app();
