/* eslint-disable no-console */
/* eslint-disable prefer-const */
export {};

// yarn ts-node src/arraysTask4.ts

/*
  Задача 4.

  Создать массив ["Уловка", "Олух!", "Пузырь!", "Остаток!"].
  С помощью методов массива превратить его в массив ["Олух!", "Пузырь!", "Остаток!", "Уловка"].
*/

let words = ['Уловка!', 'Олух!', 'Пузырь!', 'Остаток!'];

console.log(words);

// удалит элемент из начала массива
words.shift();

// добавит элемент в конец массива
words.push('Уловка!');

console.log(words);
