/* eslint-disable no-console */

// yarn ts-node src/20/DestructurizationArray/destructurizationArray.ts

/*
Friends (Друзья)

    Создать массив friends из трех элементов;
    С помощью деструктуризации вытащить первое и второе значение массива: const [first, second] = friends;
    Вывести в консоль извлеченные из массива элементы;
*/

const friends = [
  'Иван',
  'Олег',
  'Кирил',
];

const [first, second] = friends;

console.log(first, second);

/*
Pets (Питомцы)

    Создать массив pets из нескольких элементов;
    С помощью деструктуризации вытащить последнего питомца;
    Вывести в консоль извлеченный из массива элемент;
*/

const pets = [
  'Пепа',
  'Мася',
  'Мурзик',
  'Кеша',
];

const [, , , dog] = pets;

console.log(dog);

/*
Plants (Растения)

    Создать массив plants из нескольких элементов;
    С помощью деструктуризации вытащить первое и третье расление;
    Вывести в консоль извлеченные из массива элементы;
 */

const plants = [
  'Малина',
  'Смородина',
  'Земляника',
  'Ромашка',
  'Пион',
];

const [one, , three] = plants;

console.log(one, three);
