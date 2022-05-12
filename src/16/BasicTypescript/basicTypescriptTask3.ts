/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask3.ts

/*
Задача 3

Тип, содержащий строку или число

Создать тип, содержащий строку или число.
Создать переменную, явно указав ее тип.
Присвоить в нее сперва число, вывести в консоль, затем присвоить строку и снова вывести в консоль
*/

type NumOrStr = number | string;
let variable: NumOrStr;
variable = 52;
console.log(variable);
variable = 'Это строка';
console.log(variable);
