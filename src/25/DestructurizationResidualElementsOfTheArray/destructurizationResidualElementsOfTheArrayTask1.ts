/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
// @ts-nocheck

// yarn ts-node src/25/DestructurizationResidualElementsOfTheArray/destructurizationResidualElementsOfTheArrayTask1.ts

/*
Dishes (Блюда)

      Создать массив dishes из пяти элементов;
      С помощью деструктуризации вытащить первое, второе и все последющие элементы массива: const [first, second, ...rest] = dishes;
      Вывести в консоль извлеченные из массива элементы, отедльно первый, отдельно второй, отдельно последующие;
*/

const dishes = [
  'Пицца Пеперони',
  'Пицца Гавайская',
  'Пицца 4 сыра',
  'Салат Греческий',
  'Салат Цезарь',
];

const [first, second, ...rest] = dishes;

console.log(first, second, rest);

/*
Tasks (Задачи)

      Создать массив tasks из четырех элементов;
      С помощью деструктуризации вытащить первое и все последющие элементы массива;
      Вывести в консоль извлеченные из массива элементы, отедльно первый, отдельно последующие;
*/

const tasks = [
  'Проснуться',
  'Поспать',
  'Проснуться',
  'Поспать',
];

const [one, ...all] = tasks;

console.log(one, all);

/*
Party Participants (Участники)

      Создать массив partyParticipants из четырех элементов, каждый элемент должен быть объектом с полями name и age;
      С помощью деструктуризации вытащить первое, второе и все последющие элементы массива;
      Вывести в консоль извлеченные из массива элементы, отедльно первый, отдельно второй, отдельно последующие;
*/

const partyParticipants = [
  {
    age: '28',
    name: 'Инна',
  },
  {
    age: '27',
    name: 'Ирина',
  },
  {
    age: '29',
    name: 'Леонид',
  },
  {
    age: '28',
    name: 'Марат',
  },
];

const [person1, person2, ...allPerson] = partyParticipants;

console.log(person1, person2, allPerson);
