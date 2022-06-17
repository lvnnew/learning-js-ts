// @ts-nocheck
// yarn ts-node src/26/DestructurizationResidualPropertiesOfTheObject/Task1.ts

/*
Animal (Животное)

      Создать объект animal cо своствами specie, name, age (number), hasWings (boolean), canCrawl (boolean), venomous (boolean);
      С помощью деструктуризации вытащить свойства specie и name. Все остальные свойства вытащить в константу rest: const {specie, name, ...rest} = animal;
      Вывести в консоль по-отдельности полученные константы specie, name, rest;
*/

let animal = {
  age: 15,
  canCrawl: false,
  hasWings: false,
  name: 'Tiger',
  specie: 'cats',
  venomous: false,
};

rest: const {specie, name, ...rest} = animal;

console.log(specie);
console.log(name);
console.log(rest);

/*
Message

      Создать объект message cо своствами title, body, author, recipient;
      С помощью деструктуризации вытащить свойства title и body. Все остальные свойства вытащить в константу newRest;
      Вывести в консоль по-отдельности полученные константы title, name, newRest;
*/

const message = {
      titleM: 'Привет!', 
      body: 'Как дела?', 
      author: {
            nickname: 'Pepe',
            avatar: 'https://emoji.gg/emoji/1238-poggers'
      }, 
      recipient: {
            nickname: 'Джордж',
            avatar: 'https://emoji.gg/emoji/1782-jorge'
      }
};

newRest: const {titleM, body, ...newRest} = message;

console.log(titleM);
console.log(body);
console.log(newRest);

/*
Book

      Создать объект book cо своствами title, author, price, chapters. Поле chapters должно быть массивом наваний глав;
      С помощью деструктуризации вытащить свойства title и price. Все остальные свойства вытащить в константу rest;
      Вывести в консоль по-отдельности полученные константы title, price, chapters;
*/

const book = {
      title: 'К свету', 
      author: 'Андрей Дьяков', 
      series: 'Метро 2033',
      price: 470, 
      chapters: [
            'Сделка',
            'Экстернат',
            'Зоопарк на колесах',
            'На постое',
            'Марш-бросок',
            'Симбионт',
            'Джунгли',
            'Раскат',
            'Семеро одного не ждут',
            'Переправа',
            'Рубикон',
            'Ковчег',
            'Некрополь',
            'Преисподняя',
            'Решением большинства',
            'К свету',
            'Голос из прошлого',
            'Исповедь',
            'Погоня',
            'По ту сторону света',
            'Эпилог',
      ]
};

bookRest: const {title, price, ...bookRest} = book;

console.log(title);
console.log(price);
console.log(bookRest);