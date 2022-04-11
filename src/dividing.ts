import {log} from './log';

// yarn ts-node src/dividing.ts

const app = async () => {
  log.info('start');
  log.info(8 / 2);
  log.info('finish');
};

app();
