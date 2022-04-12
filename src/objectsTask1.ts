import {log} from './log';

// yarn ts-node src/objectsTask1.ts

const Vladimir = {
  age: 31,
  gender: 'male',
  maritalStatus: 'married',
};

// Vladimir.age = 25;

const app = () => {
  log.info(typeof Vladimir.age, '=', Vladimir.age);
  log.info(typeof Vladimir.gender, '=', Vladimir.gender);
  log.info(typeof Vladimir.maritalStatus, '=', Vladimir.maritalStatus);
};

app();

