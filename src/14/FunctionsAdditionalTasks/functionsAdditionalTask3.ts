/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask3.ts

/*
Задача 3

Написать анонимную стрелочную функцию, которая примет строку и индекс буквы а вернет букву из переданной строки по переданному индексу. Вывести результат функции в консоль
*/

const print = (n: string, i: number) => {
  const arrN = Array.from(n);
  console.log(arrN[i]);
};

print('каштан', 2);
