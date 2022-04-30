/* eslint-disable no-console */

export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask7.ts

/*
Задача 7

Написать анонимную стрелочную функцию, которая примет массив чисел а вернет булево, true если в пассиве есть 5 и false если нет. Вывести результат функции в консоль
*/

const arrInt = [1, 5, 6, 8, 0, 2];

const printTrueOrFalse = (a: any[], n: number) => {
  for (const e of a) {
    if (e === n) {
      return console.log(true);
    }
  }

  return console.log(false);
};

printTrueOrFalse(arrInt, 5);
