/* eslint-disable no-console */
export {};

// yarn ts-node src/searchForInformationTask1.ts

/*
  Задача 1.

  Написать функцию, которая принимает 2 числа и выводит в консоль все значения первого числа в степени от 0 до второго числа.
*/

function printInt(a: number, b: number) {
  let result = a;
  console.log(result);
  for (let i = 0; i < b; i++) {
    result *= a;
    console.log(result);
  }
}

printInt(2, 3);
