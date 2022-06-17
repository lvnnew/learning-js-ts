/* eslint-disable no-console */
import {ivanov as president, sidorov as serviceman, kusakina as accountant} from './users';
import {apple, orange, banana} from './fruits';
import {firstHarryPotterBook as firstBook, secondHarryPotterBook as secondBook, thirdHarryPotterBook as thirdBook} from './books';

// yarn ts-node src/34/DestructurizationWhenImporting/destructurizationWhenImporting.ts

/*
Users

Создать файл users.ts, который будет экспортить несколько переменных:

export const ivanov = {
  name: 'Иванов',
  age: 16,
};

export const sidorov = {
  name: 'Сидоров',
  age: 24,
};

export const kusakina = {
  name: 'Кусакина',
  age: 27,
};

Заимпортить из файла users.ts всех юзеров через деструктуризацию;

import {ivanov as president, sidorov as serviceman, kusakina as accountant} from './users';

Вывести в консоль все 3 полученные константы: president, serviceman, accountant;

*/

console.log(president, serviceman, accountant);

/*

Fruits

      Создать файл fruits.ts, который будет экспортить константы apple, orange, banana.
      В каждой константе должна лежать строка с пеерводом фрукта на русски язык;
      Заимпортить из файла fruits.ts все константы через деструктуризацию, вывести их в консоль;

*/

console.log(apple, orange, banana);

/*

Books

      Создать файл books.ts, который будет экспортить константы с книгами.
      В каждой константе должен лежать объект с полями title, description;
      Заимпортить из файла books.ts книги через деструктуризацию.
      При импорте переименовать константы. Вывести их в консоль;
*/

console.log(firstBook, secondBook, thirdBook);
