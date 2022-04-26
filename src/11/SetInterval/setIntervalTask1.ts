/* eslint-disable no-console */
export {};

// yarn ts-node src/11/SetInterval/setIntervalTask1.ts

/*
Напишите функцию, которая последовательно выводит в консоль числа от 1 до 10, с интервалом между числами 2 секунды.

1-й - с помощью setInterval
*/

function printNumbers(a: number, b: number) {
  let i = a;

  const timer = setInterval(() => {
    console.log(i);
    if (i === b) {
      clearInterval(timer);
    }
    i++;
  }, 2000);
}

printNumbers(1, 10);
