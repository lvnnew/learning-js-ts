/* eslint-disable unicorn/no-unused-properties */
// yarn ts-node src/28/DestructurizationNestedObjectDestructurization/destructurizationNestedObjectDestructurizationTask.ts

/* eslint-disable no-console */
/*
Video

      Создать объект video cо своствами title, duration, preview. В preview кладем объект с полями imgUrl, width, height;
      С помощью деструктуризации вытащить свойства duration и width: const {duration, preview: {width}} = video;
      Вывести в консоль по-отдельности полученные константы duration, width;
*/

const video = {
  duration: 25.45,
  preview: {
    height: 720,
    imgUrl: 'https://yandex.ru/images/_crpd/2cq12n810/bba9644aGnlT/kifghdFDSDSNJ',
    width: 1280,
  },
  title: 'Рецепт шашлыка',
};

const {duration, preview: {width}} = video;

console.log(duration, width);

/*
Location

      Создать объект location cо своствами street, home, apartment, coordinates. В coordinates кладем объект с полями latitude, longitude;
      С помощью деструктуризации вытащить свойства street, home, latitude и longitude;
      Вывести в консоль по-отдельности полученные константы street, home, latitude, longitude;
*/

const locationMap = {
  apartment: 15,
  coordinates: {
    latitude: '256',
    longitude: '793',
  },
  home: 120,
  street: 'Энгельса',
};

const {street, home, coordinates: {latitude, longitude}} = locationMap;

console.log(street, home, latitude, longitude);

/*
Application (приложение)

      Создать объект application cо своствами title, description, author, likesQuantity, availableVersions.
      В author кладем объект с полями firstName, lastName, в availableVersions - несколько доступных версий приложения;
      С помощью деструктуризации вытащить свойства title, likesQuantity, firstName и lastName;
      Вывести в консоль по-отдельности полученные константы title, likesQuantity, firstName, lastName;
*/

const application = {
  author: {
    firstName: 'Валера',
    lastName: 'Синельников',
  },
  availableVersions: [
    1,
    2,
    3,
  ],
  description: 'Приложение для измерения размеров кошек',
  likesQuantity: '100000012',
  title: 'Кошкамер',
};

const {title, likesQuantity, author: {firstName, lastName}} = application;

console.log(title, likesQuantity, firstName, lastName);
