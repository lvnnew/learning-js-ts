/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask1.ts

/*
Задача 1

Написать анонимную стрелочную функцию, которая вернет текущую дату. Результат функции присвоить в конcтанту, вывести контанту в консоль
*/

(() => {
  const dateNow = new Date();
  console.log(dateNow);
})();

