/* eslint-disable no-console */
// yarn ts-node src/32/DestructurizationNewObjectBasedOnAnExistingOne/destructurizationNewObjectBasedOnAnExistingOneTask1.ts

/*
Chat

      Создать объект chat cо своствами title, messagesCount, participants. В participants кладем массив с именами участников;
      Создать новый объект newChat, в котором будут те же свойста, что и в chat, но в новом чате мы переопределим поле title.

const newChat = {...chat, title: 'Чат котиков'};;

      Обрати внимание, что мы сперва наполням новы объект полями из старого и только после этого переопределяем поле title.
      Если сделать наоборот (const newChat = {title: 'Чат котиков', ...chat};) тогда title в новом объекте будет как в старом.
      Потому что мы сперва его зададим а потом перетрем полем из старого объекта;
      Вывести в консоль получившися объект;
*/

const chat = {
  messagesCount: 19534,
  participants: ['Вася', 'Петя', 'Галина', 'Лена'],
  title: 'Новый чат',
};

const newChat = {...chat, title: 'Чат котиков'};

console.log(newChat);

/*
Game

      Создать объект game cо своствами title, downloadsCount, description, gamers. В gamers кладем массив с именами игроков;
      Создать новый объект newGame, в котором будут те же свойста, что и в game, но другое описание и другое количество скачиваний;
      Вывести в консоль получившися объект;
*/

const game = {
  description: 'Кооперативное что-то',
  downloadsCount: 2000,
  gamers: ['Вася', 'Петя', 'Галина', 'Лена'],
  title: 'Fallout 76',
};

const newGame = {...game, description: 'Ну очень интересная игра. Нет', downloadsCount: '2001'};

console.log(newGame);

/*
Video

      Создать объект video cо своствами title, duration, preview. В preview кладем объект с полями imgUrl, width, height;
      Создать новый объект sportVideo, в котором будут всей своства из video + в корне объекта будут поля sportType, participants,
      а в свойство preview будут добавлены поля second, mainColor.

const sportVideo = {...video, sportType: 'basketball', participants: ['Ivanov', 'Sidorov'], preview: {...video.preview, second: 15, mainColor: 'red'}};;

      Вывести в консоль получившися объект;
*/

const video = {
  duration: 15,
  preview: {
    height: '320',
    imgUrl: 'http://yandex.ru/dgdrejhuiiunmn',
    width: '720',
  },
  title: 'Видео про котят',
};

const sportVideo = {...video, participants: ['Ivanov', 'Sidorov'], preview: {...video.preview, mainColor: 'red', second: 15}, sportType: 'basketball'};

console.log(sportVideo);

/*
Location

      Создать объект location cо своствами street, home, apartment, coordinates. В coordinates кладем объект с полями latitude, longitude, metersAboveSeaLevel;
      Создать новый объект newLocation, на основе location с помощью деструктуризации.
      Переопределяем в нем поля home, metersAboveSeaLevel, в свойство coordinates добавляем числовое поле accuracyLevel;
      Вывести в консоль получившися объект;
*/

const locationN = {
  apartment: '1',
  coordinates: {
    latitude: 346,
    longitude: 864,
    metersAboveSeaLevel: 4532,
  },
  home: '9',
  street: 'Южная',
};

const newLocation = {...locationN, coordinates: {...locationN.coordinates, accuracyLevel: 4467, metersAboveSeaLevel: 4626}, home: '5'};

console.log(newLocation);

/*
Application (приложение)

      Создать объект application cо своствами title, description, author, likesQuantity, availableVersions.
      В author кладем объект с полями firstName, lastName, rating, в availableVersions - несколько доступных версий приложения;
      Создать новый объект newApplication, на основе location с помощью деструктуризации.
      Переопределяем в нем поля description, rating, добавляем поле dislikesQuantity;
      Вывести в консоль получившися объект;
*/

const application = {
  author: {
    firstName: 'Гоша',
    lastName: 'Картошкин',
    rating: '9/10',
  },
  availableVersions: [
    1.4,
    2.7,
    3.1,
    4.1,
  ],
  description: 'Самый умный сканер свежести печенья в мире',
  likesQuantity: '2',
  title: 'Сканер свежести печенья',
};

const newApplication = {...application, description: 'Не самый умный сканер свежести печенья в мире, но самый удобный', dislikesQuantity: '1', rating: '10/10'};

console.log(newApplication);
