/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask7.ts

/*
Задача 7

Тип функции, принимающей число или строку и возвращающий строку

Создать тип функции, принимающей число или строку и возвращающий строку
Создать константу, явно указав ее тип с помощью созданного типа. Присвоить в нее функцию, выводящую аргумент, вызвав на нем toString()
Вывести в консоль результат функции, передав в нее сперва число а потом строку
*/

type Op = (x:string | number) => string;

const printStr: Op = (a) => {
  return a.toString();
};

console.log(printStr(555));
console.log(printStr('555'));
