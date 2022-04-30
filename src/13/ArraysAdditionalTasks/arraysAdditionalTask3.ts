/* eslint-disable no-console */
export {};

// yarn ts-node src/13/ArraysAdditionalTasks/arraysAdditionalTask3.ts

/*
Задача 3

Создать массив, состоящий из строк "ананас", "яблоко", "винаград", "банан", "абрикос", "помело".
Отфильтровать массив таким образом, чтобы в нем остались только строки, начинающиеся с "а". Результат вывести в консоль.
*/

const fruits = ['ананас', 'яблоко', 'винаград', 'банан', 'абрикос', 'помело'];

const words = fruits.flatMap(n => n.split(' '));
const result = words.filter(e => e.startsWith('а'));

console.log(result);
