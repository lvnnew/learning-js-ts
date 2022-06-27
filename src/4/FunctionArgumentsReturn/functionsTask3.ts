/* eslint-disable no-console */
/* eslint-disable prefer-const */
export {};

// yarn ts-node src/functionsTask3.ts

/*
Задача 3 **
Cоздать объект nevilleLongbottom.
Создать свойство объекта со значением “Yes, sir, i`ll bring her home by 7pm”.
Создать функцию, которая:
- выведет в консоль строчку “Было “ + текущее значение свойства
- изменит свойство объекта на “Your daughter calls me daddy too”
- выведет в консоль строчку “Стало “ + текущее значение свойства
*/

const nevilleLongbottom = {
  str: 'Yes, sir, i`ll bring her home by 7pm',
};

function printStr() {
  console.log('Было', nevilleLongbottom.str);
  nevilleLongbottom.str = 'Your daughter calls me daddy too';
  console.log('Стало', nevilleLongbottom.str);
}

printStr();

