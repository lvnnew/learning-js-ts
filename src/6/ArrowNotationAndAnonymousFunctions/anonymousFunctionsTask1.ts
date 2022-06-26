/* eslint-disable no-console */
export {};

// yarn ts-node src/anonymousFunctionsTask1.ts

/*
Задача 1.

Написать анонимную функцию, выводящую в консоль строку “We are the champions”.
*/

// немедленновызываемая анонимная функция
(function() {
  console.log('We are the champions');
})();

// анонимная функция
const printStr = function () {
  console.log('We are the champions');
};

printStr();
