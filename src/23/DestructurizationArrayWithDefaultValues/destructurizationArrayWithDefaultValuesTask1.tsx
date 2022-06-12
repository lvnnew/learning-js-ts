/* eslint-disable no-use-before-define */
/* eslint-disable no-console,no-undef */
// yarn ts-node src/23/DestructurizationArrayWithDefaultValues/destructurizationArrayWithDefaultValuesTask1.tsx
/*
Fruits (Фрукты)

      Создать массив fruits из двух элементов: const fruits = ['apple', 'peach'];
      С помощью деструктуризации вытащить три элемента массива, все со значениями по-умолчанию: const [first = 'pear', second = 'orange', third = 'lemon'] = fruits;
      Вывести в консоль все извлеченные из массива элементы;
*/

const fruits = [
  'apple',
  'peach',
];

const [first = 'pear', second = 'orange', third = 'lemon'] = fruits;

console.log(first, second, third);

/*
Cocktails

      Создать массив сocktails из трех элементов;
      С помощью деструктуризации вытащить пять элементов массива, все со значениями по-умолчанию;
      Вывести в консоль все извлеченные из массива элементы;
*/

const cocktails = [
  'Б-52',
  'Кровавая Мэри',
  'Сансет',
];

const [one = 'Дайкири', two = 'Мохито', three = 'Негрони', four = 'Ромовый стейк', five = 'Облако дыма'] = cocktails;

console.log(one, two, three, four, five);

/*
Music collection

      Создать массив musicCollection из трех элементов. Кажды элементом должен быть объект с полями title, year;
      С помощью деструктуризации вытащить четыре элемента массива, все со значениями по-умолчанию. В качества значений по-молчанию использовать объекты;
      Вывести в консоль все извлеченные из массива элементы;
*/

const musicCollection = [
  {
    title: 'XIII',
    year: 2003,
  },
  {
    title: 'Unto the Locust',
    year: 2011,
  },
  {
    title: 'The Rise of Brutality',
    year: 2003,
  },
];

const [Mushroomhead = {title: 'A Wonderful Life', year: 2020},
  MachineHead = {title: 'The Blackening', year: 2007},
  Hatebreed = {title: 'Perseverance', year: 2002},
  Mudvayne = {title: 'Mudvayne', year: 2009}] = musicCollection;

console.log(Mushroomhead, MachineHead, Hatebreed);
