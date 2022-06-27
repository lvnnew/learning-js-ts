/* eslint-disable unicorn/no-unused-properties */
import {log} from '../../log';

// yarn ts-node src/objectsTask2.ts

/*
Задача 2:

Создать объект, назвать его своим именем.
Добавить свойства объекта: пол, возраст, семейное положение и родителей.
В качестве значения родителей использовать объект со свойствами: имя мамы, имя папы.
Вывести в консоль имена родителей.
*/

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

