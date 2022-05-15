/* eslint-disable no-console */
export {};

// yarn ts-node src/15/ObjectAdditionalTasks/objectAdditionalTask2.ts

/*
Задача 2

Создать объект с 2 полями: words, addWord. В words положить массив со словами "эники", "беники", в addWord метод, которые пример строку и добавит ее в массив, лежащий в поле words
Вывести в консоль поле words
Вызвать метод addWord, передав в него какое-нибудь слово
Еще раз вывести в консоль поле words
*/

const objectArray = {
  addWord: (str: string) => {
    objectArray.word.push(str);
  },
  word: [
    'эники',
    'беники',
  ],
};

console.log('Первый вывод -', objectArray.word);

objectArray.addWord('ели');

console.log('Второй вывод -', objectArray.word);

objectArray.addWord('вареники');

console.log('Третий вывод -', objectArray.word);
