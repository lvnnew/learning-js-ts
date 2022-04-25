/* eslint-disable no-console */
export {};

// yarn ts-node src/12/RememberEverything/rememberTask2.ts

/*
Задача 2. **

Создать 3 объекта: peter, percy, patrick. Каждому объекту присвоить свойство home.
Значение поля home:

у объекта percy - “соломенный дом”

у объекта peter - “деревянный дом”

у объекта patrick - “каменный дом”

Создать функцию wolfBlew, которая принимает объект. Функция меняет значение поля home на “пффффф”.
Нужно изменить значение свойства у объектов percy и peter и вывести в консоль значение поля home каждого из них.
Должно получиться:
“У Перси - пффффф
У Питера - пффффф
У Патрика - каменный дом”
*/

const peter = {
  home: 'деревянный дом',
};

const percy = {
  home: 'соломенный дом',
};

const patrick = {
  home: 'каменный дом',
};

const wolfBlew = function (a: { home: any; }, b: { home: any; }) {
  a.home = b.home = 'пффффф';
  console.log('У Питера - ' + peter.home + '\n' +
              'У Перси - ' + percy.home + '\n' +
              'У Патрика - ' + patrick.home,
  );
};

wolfBlew(percy, peter);
