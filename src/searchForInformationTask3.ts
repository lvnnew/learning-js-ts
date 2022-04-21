/* eslint-disable no-console */
export {};

// yarn ts-node src/searchForInformationTask3.ts

/*
  Задача 3

  Отсортировать массив [66, 4, 6, 67, 11, 45, 1, 96] от меньшего значения к большему.
*/

const arrayInt = [66, 4, 6, 67, 11, 45, 1, 96];

arrayInt.sort((a, b) => {
  return a - b;
});

console.table(arrayInt);
