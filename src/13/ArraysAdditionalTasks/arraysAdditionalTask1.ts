/* eslint-disable no-console */
export {};

// yarn ts-node src/13/ArraysAdditionalTasks/arraysAdditionalTask1.ts

/*
Задача 1

Создать массив, состоящий из чисел 4, 3, 5, 0, -22, 45, 10, 11.
Отфильтровать массив таким образом, чтобы в нем остались только нечетные числа. Результат вывести в консоль.
*/

const arrayInt = [4, 3, 5, 0, -22, 45, 10, 11];

const result = arrayInt.filter(arrInt => arrInt % 2);

console.log(result);
