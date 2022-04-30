/* eslint-disable no-console */
export {};

// yarn ts-node src/14/FunctionsAdditionalTasks/functionsAdditionalTask6.ts

/*
Задача 6

Написать анонимную стрелочную функцию, которая примет строку а вернет булево, true если строка начинается с "ру" и false если не начинается. Вывести результат функции в консоль
*/

const printTrueOrFalse = (n: string) => {
  if (n.startsWith('ру')) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

printTrueOrFalse('рука');
