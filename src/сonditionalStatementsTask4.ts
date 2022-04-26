/* eslint-disable unicorn/no-unused-properties */
import {log} from './log';

// yarn ts-node src/сonditionalStatementsTask4.ts

const pair = {
  criss: 'любит Марию',
  darren: 'любит Джулию',
  sam: 'любит Джессику',
};

const app = () => {
  if (pair.sam === 'любит Марию') {
    log.info('Сэм любит Марию');
  } else if (pair.criss === 'любит Марию') {
    log.info('Крисс любит Марию');
  } else {
    log.info('Даррен любит Марию');
  }
};

app();
