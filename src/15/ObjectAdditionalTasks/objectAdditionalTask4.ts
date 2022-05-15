/* eslint-disable no-console */
export {};

// yarn ts-node src/15/ObjectAdditionalTasks/objectAdditionalTask4.ts

/*
Задача 4

Создать объект с 2 полями: words, sortedWords. В words положить массив со словами "ананас", "яблоко", "винаград", "банан", "абрикос", "помело",
в sortedWords метод, который вернет строки из поля words, отсортированные по алфавиту.
Вызвать метод sortedWords, вывести его результат в консоль
*/

const fruits = {
  filteredWords: () => {
    const filtered = fruits.words.sort();

    return console.log(filtered);
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

fruits.filteredWords();
