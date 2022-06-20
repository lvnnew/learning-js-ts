// @ts-nocheck
/* eslint-disable no-console */
// yarn ts-node src/30/DestructurizationNestedResidualPropertiesOfAnObject/destructurizationNestedResidualPropertiesOfAnObjectTask1.ts

/*
Video

      Создать объект video cо своствами title, duration, preview. В preview кладем объект с полями imgUrl, width, height;
      С помощью деструктуризации вытащить свойства duration и width, в константу restPreview положить оставшиеся свойства превью,
      а в константу restVideo оставшиеся свойства ролика: const {duration, preview: {width, ...restPreview}, ...restVideo} = video;
      Вывести в консоль по-отдельности все константы duration, width, restPreview, restVideo;
*/

const videoN = {
  duration: '23.59',
  preview: {
    height: 320,
    imgUrl: 'http://yandex.ru/lklklsjdjshdudjmxxccbnjdhfus',
    width: 720,
  },
  title: 'Видео с котятами',
};

const {duration, preview: {width, ...restPreview}, ...restVideo} = videoN;

console.log(duration, width, restPreview, restVideo);

/*
Location

      Создать объект location cо своствами street, home, apartment, coordinates.
      В coordinates кладем объект с полями latitude, longitude, metersAboveSeaLevel;
      С помощью деструктуризации вытащить свойства street, metersAboveSeaLevel, в константу restCoordinates положить оставшиеся свойства координат, 
      а в константу restLocation оставшиеся свойства локации;
      Вывести в консоль по-отдельности полученные константы street, metersAboveSeaLevel, restCoordinates, restLocation;
*/

const locationN = {
    street: 'Васильковая', 
    home: 12, 
    apartment: 33, 
    coordinates: {
        metersAboveSeaLevel: 40,
        latitude: 454, 
        longitude: 125, 
    }
};

const {street, coordinates: {metersAboveSeaLevel, ...restCoordinates}, ...restLocation} = locationN;

console.log(street, metersAboveSeaLevel, restCoordinates, restLocation);

/*
Application (приложение)

      Создать объект application cо своствами title, description, author, likesQuantity, availableVersions.
      В author кладем объект с полями firstName, lastName, rating, в availableVersions - несколько доступных версий приложения;
      С помощью деструктуризации вытащить свойства title, description, firstName, в константу restAuthor положить оставшиеся свойства автора, 
      а в константу restApplication оставшиеся свойства приложения;
      Вывести в консоль по-отдельности полученные константы title, description, firstName, restAuthor, restApplication;
*/

const application = {
    title: 'ToDoList', 
    descriptionN: 'ToDoList', 
    author: {
        firstName: 'Арсений', 
        lastName: 'Великий', 
        rating: '12/10',
    }, 
    likesQuantity: 1000, 
    availableVersions: [
        2,
        2.1,
        2.2,
        2.3,
    ],
};

const {title, descriptionN, author: {firstName, ...restAuthor}, ...restApplication} = application;

console.log(title, descriptionN, firstName, restAuthor, restApplication);