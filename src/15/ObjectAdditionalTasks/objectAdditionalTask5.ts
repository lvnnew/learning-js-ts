/* eslint-disable no-console */
export {};

// yarn ts-node src/15/ObjectAdditionalTasks/objectAdditionalTask5.ts

/*
Задача 5

Создать объект с 2 полями: words, upperCasedWords. В words положить массив со словами "ананас", "яблоко", "винаград", "банан", "абрикос", "помело",
в upperCasedWords метод, который вернет строки из поля words, но со всеми буквами в верхнем регистре.
Вызвать метод upperCasedWords, вывести его результат в консоль
*/

const fruits = {
  upperCasedWords: () => {
    const fruitsUpper = fruits.words.map(fruit => fruit.toUpperCase());
    console.log(fruitsUpper);
  },
  words: [
    'ананас',
    'яблоко',
    'винаград',
    'банан',
    'абрикос',
    'помело',
  ],
};

fruits.upperCasedWords();
