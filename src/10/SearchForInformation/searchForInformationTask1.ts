/* eslint-disable no-console */
export {};

// yarn ts-node src/10/SearchForInformation/searchForInformationTask1.ts

/*
  Задача 1.

  Написать функцию, которая принимает 2 числа и выводит в консоль все значения первого числа в степени от 0 до второго числа.
*/

let result = 1;
function printInt(a: number, b: number) {
  for (let i = 1; i <= b; i++) {
    result *= a;
    console.log(result);
  }
}

printInt(2, 3);
