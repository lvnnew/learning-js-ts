/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask8.ts

/*
Задача 8

Интерфейс с методом

Создать интерфейс с полями lastName, age, sayHello. Поле sayHello должно быть типом функции, которая принмает строку name и возвращает строку.
Создать константу, явно указав ее тип с помощью созданного интерфейса.
Положить в нее объект с указанными полями, функция должна возвращать строку "Hello, name!", где name - это имя, переданное в функцию в качестве аргумента.
Вывести в консоль поля объекта, вывести резулььтат метода sayHello, передав в него имя 'Бог войны'
*/

type sayHelloName = (name:string) => string;

interface SayName {
    name: string;
    age: number,
    lastName: string,
    sayHello: sayHelloName
}

const person: SayName = {
  age: 25,
  lastName: 'Ivanov',
  name: 'Вася',
  sayHello: (name: string) => {
    return name;
  },
};

console.log(person);
console.log('Hello, ' + person.sayHello('Бог войны') + '!');
