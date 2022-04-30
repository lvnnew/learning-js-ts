/* eslint-disable no-console */
export {};

// yarn ts-node src/13/ArraysAdditionalTasks/arraysAdditionalTask4.ts

/*
Задача 4

Создать массив, состоящий из строк "ананас", "яблоко", "винаград", "банан", "абрикос", "помело".
Преобразовать массив таким образом, чтобы все строки в нем были написаны большыми буквами. Результат вывести в консоль.
*/

const fruits = ['ананас', 'яблоко', 'винаград', 'банан', 'абрикос', 'помело'];

const fruitsUpperCase = fruits.map((x) => {
  return x.toUpperCase();
});

console.log(fruitsUpperCase);
