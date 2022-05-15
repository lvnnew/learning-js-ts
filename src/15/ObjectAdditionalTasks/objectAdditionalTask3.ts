import {words} from 'lodash';

/* eslint-disable no-console */
export {};

// yarn ts-node src/15/ObjectAdditionalTasks/objectAdditionalTask3.ts

/*
Задача 3

Создать объект с 2 полями: words, filteredWords. В words положить массив со словами "ананас", "яблоко", "винаград", "банан", "абрикос", "помело",
в filteredWords метод, который вернет строки из поля words, которые начинающиеся с "а".
Вызвать метод filteredWords, вывести его результат в консоль
*/

const fruits = {
  filteredWords: (n:string) => {
    const filtered = fruits.words.filter(w => w[0] === n);

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

fruits.filteredWords('а');
