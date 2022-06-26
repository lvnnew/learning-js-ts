/* eslint-disable no-console */
export {};

// yarn ts-node src/functionsTask1.ts

/*
Задача 1
Написать функцию, которая в качестве аргумента принимает 2 числа и выводит в консоль их сумму.
*/

function sumInt (val1: number, val2: number) {
  return (val1 + val2);
}

console.log(sumInt(10, 30));
