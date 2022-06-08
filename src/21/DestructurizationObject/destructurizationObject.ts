/* eslint-disable no-console */

// yarn ts-node src/21//DestructurizationObject/destructurizationObject.ts

/*
Article (Статья)

      Создать объект article cо своствами author, category, description;
      С помощью деструктуризации вытащить свойства author и description: const {author, description} = article;
      Вывести в консоль извлеченные из объекта свойства;
*/

const article = {
  author: 'Дмитрий Глуховский',
  category: 'Постапокалипсис',
  description: 'Метро 2033',
};

const {author, description} = article;

console.log(author, description);

/*
Phone

      Создать объект phone cо своствами model, ram, os;
      С помощью деструктуризации вытащить свойства model и os;
      Вывести в консоль извлеченные из объекта свойства;
*/

const phone = {
  model: 'Honor',
  os: 'Android',
  ram: '16',
};

const {model, os} = phone;

console.log(model, os);

/*
Shop (Магазин)

      Создать объект shop cо своствами address, workingHours, staff. В поле staff положить массив строк с именами сотрудников;
      С помощью деструктуризации вытащить все свойства объекта;
      Вывести в консоль извлеченные из объекта свойства;
*/

const shop = {
  address: 'ул. Печенькина 12',
  staff: ['Вася', 'Алина', 'Маша'],
  workingHours: '9-18',
};

const {address, staff, workingHours} = shop;

console.log(address, staff, workingHours);
