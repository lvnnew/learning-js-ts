/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask2.ts

/*
Задача 2

Написать анонимную стрелочную функцию, которая вернет случаное число. Результат функции присвоить в контанту, вывести контанту в консоль
*/

const randomNumber = (max: number) => {
  const randNum = Math.floor(Math.random() * max);
  console.log(randNum);
};

randomNumber(10);
