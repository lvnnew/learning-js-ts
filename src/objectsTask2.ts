/* eslint-disable unicorn/no-unused-properties */
import {log} from './log';

// yarn ts-node src/objectsTask2.ts

const Vladimir = {
  age: 31,
  gender: 'male',
  maritalStatus: 'married',
  parents: {
    father: 'Генадий',
    mother: 'Марина',
  },
};

const app = () => {
  log.info(Vladimir.parents.father);
  log.info(Vladimir.parents.mother);
};

app();

