/* eslint-disable no-console */
export {};

// yarn ts-node src/searchForInformationTask1.ts

/*
  Задача 1.

  Написать функцию, которая принимает 2 числа и выводит в консоль все значения первого числа в степени от 0 до второго числа.
*/

function printInt(a: number, b: number) {
  for (let i = 0; i <= a ** b; i++) {
    console.log(i);
  }
}

printInt(2, 3);
