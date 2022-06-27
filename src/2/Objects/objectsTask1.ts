import {log} from '../../log';

// yarn ts-node src/objectsTask1.ts

/*
Задача 1:

Создать объект, назвать его своим именем.
Добавить свойства объекта: пол, возраст, семейное положение.
Вывести в консоль все свойства объекта
Изменить возраст и вывести в консоль все свойства объекта
*/

const Vladimir = {
  age: 31,
  gender: 'male',
  maritalStatus: 'married',
};

// Vladimir.age = 25;

const app = () => {
  log.info(typeof Vladimir.age, Vladimir.age);
  log.info(typeof Vladimir.gender, Vladimir.gender);
  log.info(typeof Vladimir.maritalStatus, Vladimir.maritalStatus);
};

app();

