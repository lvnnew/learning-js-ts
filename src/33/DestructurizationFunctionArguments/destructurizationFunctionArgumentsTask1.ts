/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable no-console */
// yarn ts-node src/33/DestructurizationFunctionArguments/destructurizationFunctionArgumentsTask1.ts

/*
Print Video Data (Вывод данных видео)

Создать интерфес Video:

interface Video {
  title: string;
  description: string;
  preview: {
    url: string;
    width: number;
    height: number;
  }
}

    Создать функцию, которая примет объект с видео и выведет в консоль татйтл и адрес картинки с превью.
    Нужные поля функция должна извлеч из объекта, переданного в аргументы через деструктуризацию (сразу в агрументах).
    Вытаскиваться должны только те поля, которые потребуются для работы функции:

const printPreviewData = ({title, preview: {url}}: Video) => {
  log.info(`${title} (${url})`);
};

Вызвать функцию, убедиться что она работает;

*/

interface Video {
    title: string;
    description: string;
    preview: {
      url: string;
      width: number;
      height: number;
    }
}

const video: Video = {
  description: 'То что нужно для хорощего утра',
  preview: {
    height: 320,
    url: 'http://yandex.ru/dgdrejhuiiunmn',
    width: 720,
  },
  title: 'Видео про котят',
};

const printPreviewData = ({title, preview: {url}}: Video) => {
  console.log(`${title} (${url})`);
};

printPreviewData(video);

/*

Print Application (Вывод данных приложения)

Создать интерфес Location:

interface Application {
  title: string;
  description: string;
  likesQuantity?: number;
}

    Создать функцию, которая примет объект с приложением и выведет в консоль описание и количество лаков.
    Нужные поля функция должна извлеч из объекта, переданного в аргументы через деструктуризацию (сразу в агрументах).
    Вытаскиваться должны только те поля, которые потребуются для работы функции. При деструктуризации для всех вытаскиваемых полей укажи значения по-умолчанию;
    Вызвать функцию дважды, в первый раз передать в нее объект, установив все поля, во второй - только title и description;

*/

interface Application {
    title: string;
    description: string;
    likesQuantity?: number;
}

const applicationSport: Application = {
  description: 'Приложение для ежедневных тренировок',
  likesQuantity: 355,
  title: 'Шагомер',
};

const applicationMusic: Application = {
  description: 'Приложение для воспроизведени музыки',
  title: 'Яндекс Музыка',
};

const printApplicationData = ({description = 'Новое приложение', likesQuantity = 4000}: Application) => {
  console.log(`${description} ${likesQuantity}`);
};

printApplicationData(applicationSport);
printApplicationData(applicationMusic);

/*

Print Location (Вывод данных локации)

Создать интерфес Location:

interface Location {
  street: string;
  home: string;
  apartment?: string;
  coordinates: {
    latitude?: number;
    longitude?: number;
    metersAboveSeaLevel?: number;
  }
}

    Создать функцию, которая примет объект с локацией и выведет в консоль улицу, дом, ширину и долгота.
    Нужные поля функция должна извлеч из объекта, переданного в аргументы через деструктуризацию (сразу в агрументах).
    Вытаскиваться должны только те поля, которые потребуются для работы функции. При деструктуризации для всех вытаскиваемых полей укажи значения по-умолчанию;
    Вызвать функцию дважды, в первый раз передать в нее объект, установив все поля, во второй передать пустой объект в поле coordinates;

*/

interface Location {
    street: string;
    home: string;
    apartment?: string;
    coordinates: {
      latitude?: number;
      longitude?: number;
      metersAboveSeaLevel?: number;
    }
}

const locationOmsk: Location = {
  apartment: '5',
  coordinates: {
    latitude: 3456,
    longitude: 8756,
    metersAboveSeaLevel: 75657,
  },
  home: '37',
  street: 'Омская',
};

const locationMoscow: Location = {
  apartment: '514',
  coordinates: {},
  home: '158',
  street: 'Московская',
};

const printLocationData = ({street = 'Добронравова', home = '52', coordinates: {latitude = 500, longitude = 150}}: Location) => {
  console.log(`${street} ${home} ${latitude} ${longitude}`);
};

printLocationData(locationOmsk);
printLocationData(locationMoscow);

/*

Print transfer data

Создать интерфес Location:

interface User {
  firstName?: string;
  LastName?: string;
  account: number;
}

    Создать функцию с тремя аргументами. Первые 2 аргумента типа User и третий числовой аргумент amount;
    Выведет в консоль строку типа _Имя_первого_пользователя_ (_Счет_первого_пользователя_) переводит _amount_ кокосовых скорлупок пользователю _Имя_второго_пользователя_ (_Счет_второго_пользователя_).
    Пример вывода: `Сидоров (345789) переводит 8 кокосовых скорлупок пользователю Петров (0980987);
    Нужные поля функция должна извлеч из объектов через деструктуризацию (сразу в агрументах).
    Вытаскиваться должны только те поля, которые потребуются для работы функции.
    При деструктуризации для всех вытаскиваемых полей укажи значения по-умолчанию;
    Обрати внимание, что из обоих объетов мы вытаскиваем одинаковые поля.
    Чтобы избежать конфликта, при извлечении через деструктуризацию, поля нужно переименовать.
    Мы это проходили в заданиях Деструктуризация. Объекта с переименованием свойств;
    Вызвать функцию дважды, в первый раз передать в нее объекты, установив все поля, во второй не передавать имен;
*/

interface User {
    firstName?: string;
    LastName?: string;
    account: number;
}

const userStoryOne: User = {
  account: 56,
  firstName: 'Иван',
  LastName: 'Лёша',
};

const userStoryTwo: User = {
  account: 23,
};

const printReport = ({firstName = 'Дима', LastName = 'Жора'}: User, amount: number) => {
  console.log(`${firstName} переводит ${amount} кокосовых скорлупок пользователю ${LastName}`);
};

printReport(userStoryOne, 28);
printReport(userStoryTwo, 45);
