import {log} from './log';

// yarn ts-node src/calc.ts

const app = async () => {
  log.info('start');
  log.info(4 + 3);
  log.info('finish');
};

app();
