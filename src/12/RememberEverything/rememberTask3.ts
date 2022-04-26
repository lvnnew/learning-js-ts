/* eslint-disable no-console */
export {};

// yarn ts-node src/12/RememberEverything/rememberTask3.ts

/*
Задача 3.

Написать анонимную функцию, которая выводит в консоль таблицу умножения на 5.
Вызвать функцию.
*/

const multiplicationTable = (b: number) => {
  let a = 0;
  while (a <= 10) {
    const c = b * a;
    console.log(b + ' * ' + a + ' = ' + c);
    a++;
  }
};

multiplicationTable(5);
