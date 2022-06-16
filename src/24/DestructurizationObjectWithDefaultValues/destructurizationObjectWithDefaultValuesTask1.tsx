/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// yarn ts-node src/24/DestructurizationObjectWithDefaultValues/destructurizationObjectWithDefaultValuesTask1.tsx

/*
Advert (Реклама)

      Создать объект advert cо свойствами phone, price (number), description;
      С помощью деструктуризации вытащить свойства author, price, description и city.
      Для всех полей должны быть заданы значения по-умолчанию: const {author = 'Unknown author', price = 0, description = 'No descrition', city = 'Unknown city'} = advert;
      Вывести в консоль извлеченные из объекта свойства author, price, description и city;
*/

const advert = {
  description: 'Печеньее',
  phone: '435-475-64-07',
  price: 20,
};

const {author = 'Unknown author', price = 0, description1 = 'No descrition', city1 = 'Unknown city'} = advert;

console.log(author, price, description1, city1);

/*
Station (Станция)

      Создать объект station cо свойствами title, city;
      С помощью деструктуризации вытащить свойства title, city, workingHours.
      Для всех полей должны быть заданы значения по-умолчанию;
      Вывести в консоль извлеченные из объекта свойства;
*/

const station = {
  city: 'Москва',
  title: 'Новая',
};

const {city = 'Омск', title = 'Пролетарская', workingHours = '6:00 - 5:00'} = station;

console.log(city, title, workingHours);

/*
Lesson (Урок)

      Создать объект lesson cо свойствами subject, description;
      С помощью деструктуризации вытащить свойства subject, description, participants.
      Для всех полей должны быть заданы значения по-умолчанию.
      Для поля participants значением по-умолчанию должен быть массив имен учеников;
      Вывести в консоль извлеченные из объекта свойства;
*/

const lesson = {
  description: 'Деструктуризация',
  subject: 'JS',
};

const {subject = 'Python', description = 'Кортежы', participants = ['кошка Мася', 'кошка Пепа']} = lesson;

console.log(subject, description, participants);
