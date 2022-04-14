/* eslint-disable no-console */
import {log} from './log';

// yarn ts-node src/functionsTask2.ts

function printStr(xxx = 'печенье') {
  if (xxx === 'аниме') {
    return;
  }
  if (xxx !== 'аниме') {
    console.log('Мишка любит', xxx);
  }
}

printStr();

const app = async () => {
  log.info();
};

app();
