/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask4.ts

/*
Задача 4

Простой интерфейс

Создать интерфейс "Friend" с полями: age (числовое), name (строковое). Создать константу, явно указав ее тип, присвоить в нее объект, удовлетворяющий интерфейсу.
Вывести в консоль данный объект.
*/

interface Friend {
    age: number,
    name: string,
}

const people: Friend = {
  age: 25,
  name: 'Alex',
};

console.log(people);
