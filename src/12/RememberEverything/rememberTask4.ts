/* eslint-disable no-console */
export {};

// yarn ts-node src/12/RememberEverything/rememberTask4.ts

/*
Задача 4.

Имеется массив данных:
firstName: Ann
gender: female
age: 28
amount: 4
firstName: Ben
gender: male
age: 31
amount: 3
firstName: Darren
gender: male
age: 20
amount: 12
firstName: Sam
gender: male
age: 20
amount: 3
firstName: Emma
gender: female
age: 21
amount: 7
firstName: Mary
gender: female
age: 35
amount: 9
firstName: Henry
gender: male
age: 41
amount: 10
Написать функцию, подсчитывающую общее потребление
Написать функцию, подсчитывающую общее потребление тех, чей возраст меньше 30
Создать массивы:

старше 30 лет
только женщины
только мужчины старше 30 лет
*/

const People = [
  {age: 28, amount: 4, firstName: 'Ann', gender: 'female'},

  {age: 31, amount: 3, firstName: 'Ben', gender: 'male'},

  {age: 20, amount: 12, firstName: 'Darren', gender: 'male'},

  {age: 20, amount: 3, firstName: 'Sam', gender: 'male'},

  {age: 21, amount: 7, firstName: 'Emma', gender: 'female'},

  {age: 35, amount: 9, firstName: 'Mary', gender: 'female'},

  {age: 41, amount: 10, firstName: 'Henry', gender: 'male'},
];

// Написать функцию, подсчитывающую общее потребление
const summAmount = () => {
  const newArr = People.map(i => {
    return i.amount;
  });
  let result = 0;
  for (const element of newArr) {
    result += element;
  }
  console.log('Общее потребление = ' + result);
};

summAmount();

// Написать функцию, подсчитывающую общее потребление тех, чей возраст меньше 30
const summAmount30 = () => {
  const arrAge = People.filter(a => a.age <= 30);
  const newArrN = arrAge.map(i => {
    return i.amount;
  });
  let result = 0;
  for (const element of newArrN) {
    result += element;
  }
  console.log('Общее потребление тех, чей возраст меньше 30 лет = ' + result);
};

summAmount30();

// старше 30 лет
const arrAge30 = People.filter(a => a.age <= 30);
console.table(arrAge30);

// только женщины
const arrFemale = People.filter(a => a.gender === 'female');
console.table(arrFemale);

// только мужчины старше 30 лет
const arrMale = People.filter(a => a.gender === 'male' && a.age >= 30);
console.table(arrMale);
