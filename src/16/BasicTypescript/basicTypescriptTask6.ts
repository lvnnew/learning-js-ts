/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask6.ts

/*
Задача 6

Тип функции, принимающей число и возвращающей число

Создать тип функции, принимающей число и возвращающей число
Создать константу, явно указав ее тип с помощью созданного типа. Присвоить в нее функцию, выводящую аргумент умноженный на 2
Вывести в консоль результат функции
*/

type Op = (x:number) => number;

const printNum: Op = function (a:number) {
  return a * 2;
};

console.log(printNum(5));
