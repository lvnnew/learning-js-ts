/* eslint-disable no-console */
export {};

// yarn ts-node src/cyclesTask1.ts

/*
  Задача 1.

  Дан массив с элементами 2, 5, 9, 15, 0, 4.
  Вывести на экран столбец тех элементов массива, которые больше 3, но меньше 10.
*/

const arrayInt = [2, 5, 9, 15, 0, 4];

for (const element of arrayInt) {
  if (element > 3 && element < 10) {
    console.log(element);
  }
}
