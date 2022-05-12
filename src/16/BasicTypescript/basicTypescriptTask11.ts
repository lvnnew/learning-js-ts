/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask11.ts

/*
Задача 11

Тип, содержащий объект

Создать тип, описывающий объект с полями name, age.
Написать код на свое усмотрение, явно использующий созданный тип
*/

type Obj = {
    name: string,
    age: number,
}

const person: Obj = {
  age: 22,
  name: 'Rita',
};

console.log(person);

person.age = 25;

console.log(person);
