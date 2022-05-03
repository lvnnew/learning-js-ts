/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask5.ts

/*
Задача 5

Написать анонимную стрелочную функцию, которая примет число а вернет удвоенное переданное число. Вывести результат функции в консоль
*/

const doublesNumber = (n: number) => {
  console.log(n * 2);
};

doublesNumber(6);
