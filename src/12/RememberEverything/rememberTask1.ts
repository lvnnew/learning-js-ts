/* eslint-disable unicorn/no-unused-properties */
/* eslint-disable no-console */
export {};

// yarn ts-node src/12/RememberEverything/rememberTask1.ts

/*
Задача 1.

Создать объект Avengers.
Добавить свойства объекта: strongestAvengers, cleverestAvengers, mostBeautifulAvengers
Добавить значения свойств: ironMan, captainAmerica, spiderMan (куда какой - на свое усмотрение)
С помощью конструкций if/else if/else вывести в консоль одну из фраз
"Да, Тони самый сильный, он ведь надрал зад Таносу", "Да, Тони чертов гений",
"Ну ок, Тони хотя бы красивый, спасибо на этом" - ту, которая соответствует твоему распределению супергероев.
*/

const Avengers = {
  cleverestAvengers: 'captainAmerica',
  mostBeautifulAvengers: 'ironMan',
  strongestAvengers: 'spiderMan',
};

if (Avengers.strongestAvengers === 'ironMan') {
  console.log('Да, Тони самый сильный, он ведь надрал зад Таносу');
} else if (Avengers.cleverestAvengers === 'ironMan') {
  console.log('Да, Тони чертов гений');
} else {
  console.log('Ну ок, Тони хотя бы красивый, спасибо на этом');
}
