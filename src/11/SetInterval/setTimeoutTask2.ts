/* eslint-disable no-console */
export {};

// yarn ts-node src/11/SetInterval/setIntervalTask2.ts

/*
Напишите функцию, которая последовательно выводит в консоль числа от 1 до 10, с интервалом между числами 2 секунды.

2-й - с помощью setTimeout.
*/

function printNumbers(a: number, b: number) {
  let i = a;

  setTimeout(function print() {
    console.log(i);
    if (i < b) {
      setTimeout(print, 2000);
    }
    i++;
  }, 2000);
}

printNumbers(1, 10);
