/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask4.ts

/*
Задача 4

Написать анонимную стрелочную функцию, которая примет массив чисел а вернет последний элемент переданного массива. Вывести результат функции в консоль
*/

const arrNum = [1, 3, 4, 2, 46, -97, 9, 0, 467];

const lastArrElement = (n: any[]) => {
  const lastElem = n.pop();
  console.log(lastElem);
};

lastArrElement(arrNum);
