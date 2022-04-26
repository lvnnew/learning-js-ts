/* eslint-disable no-console */
export {};

// yarn ts-node src/arraysTask1.ts

/*
  Задача 1.

  Создать массив, состоящий из не менее 4 чисел.
  Вывести в консоль сумму 2 и 4 элемента массива
*/

const arrayInt = [1, 2, 10, 68, 80];

console.table(arrayInt); // отображает содержимое массива в виде таблицы

console.log(arrayInt[1] + arrayInt[3]);
