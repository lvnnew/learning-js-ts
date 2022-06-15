/* eslint-disable no-console */
/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// import {ivanov, sidorov: {name}, , kusakina: {name: accountant}} from './users';

// сделал через require, потому что с импортом возникли некоторые сложности
const {ivanov, sidorov: {name}, kusakina: {name: accountant}} = require('./users');
const {apple: {translation: apple}, orange: {translation: orange}, banana: {translation: banana}} = require('./fruits');
const {harryPotter1: {title: titleOne}, harryPotter2: {title: titleTwo}, harryPotter3: {title: titleThree}, harryPotter4: {title: titleFour}, harryPotter5: {title: titleFive}, harryPotter6: {title: titleSix}, harryPotter7: {title: titleSeven}} = require('./books');

// yarn ts-node src/34/DestructurizationWhenImporting/destructurizationWhenImporting.ts

/*
Users

Создать файл users.ts, который будет экспортить несколько переменных:

export const ivanov = {
  name: 'Иванов',
  age: 16,
};

export const sidorov = {
  name: 'Сидоров',
  age: 24,
};

export const kusakina = {
  name: 'Кусакина',
  age: 27,
};

Заимпортить из файла users.ts:

      Константу ivanov;
      Поле name из объекта sidorov;
      Поле name из объекта kusakina, положив это поле в константу accountant;

import {ivanov, sidorov: {name}, , kusakina: {name: accountant}} from './users';

Вывести в консоль все 3 полученные константы: ivanov, name, accountant;

*/

console.log(ivanov, name, accountant);

/*

Fruits

      Создать файл fruits.ts, который будет экспортить константы apple, orange, banana.
      В каждой константе должна лежать строка с пеерводом фрукта на русски язык;
      Заимпортить из файла fruits.ts все константы через деструктуризацию, вывести их в консоль;

*/

console.log(apple, orange, banana);

/*

Books

      Создать файл books.ts, который будет экспортить константы с книгами. В каждой константе должен лежать объект с полями title, description;
      Заимпортить из файла books.ts названия книг, вывети их в консоль;
      Обрати внимание что, так как, мы вытаскиваем одинаковые поля из объектов, для избежания конфликтов имена, при деструктуризации, нужно будет пеерименоват.
      Деструктуризацию с переименованием мы уже проходили;
*/

console.log(titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix, titleSeven);
