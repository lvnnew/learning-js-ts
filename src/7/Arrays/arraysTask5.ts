/* eslint-disable no-console */
/* eslint-disable prefer-const */
export {};

// yarn ts-node src/arraysTask5.ts

/*
  Задача 5.

  Создать массив, состоящий из чисел 4, 3, 5, 0, -22, 45, 10, 11.
  Отфильтровать массив таким образом, чтобы в нем остались только числа, делящиеся на 5 без остатка. Результат вывести в консоль.
*/

const arrayInt = [4, 3, 5, 0, -22, 45, 10, 11];

const result = arrayInt.filter(num => num % 5 === 0);

console.log(result);
