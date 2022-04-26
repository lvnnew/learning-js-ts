/* eslint-disable no-console */
/* eslint-disable prefer-const */
export {};

// yarn ts-node src/arraysTask2.ts

/*
  Задача 2.

  Написать функцию, которая из массива [ “а”, “к”, “л”, “о”, “п”, “с”, “р”, “т”, “е”] составит три слова и выведет их в консоль.
  Вызвать эту функцию
*/

let letters = ['а', 'к', 'л', 'о', 'п', 'с', 'р', 'т', 'е'];

function words () {
  console.log(letters[5] + letters[7] + letters[0] + letters[6] + letters[7]);
  console.log(letters[2] + letters[3] + letters[4] + letters[0] + letters[7] + letters[0]);
  console.log(letters[4] + letters[0] + letters[2] + letters[1] + letters[0]);
}

words();

