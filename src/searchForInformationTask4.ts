/* eslint-disable no-console */
export {};

// yarn ts-node src/searchForInformationTask4.ts

/*
  Задача 4

  Написать функцию, которая принимает целое число в качестве аргумента и возвращает «четные» для четных чисел или «нечетные» для нечетных чисел.
*/

function even_or_odd(n: number) {
  if (n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(even_or_odd(4));
console.log(even_or_odd(9));
