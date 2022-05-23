/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask12.ts

/*
Задача 12

Тип, содержащий объект с вложенным объектом

Создать тип, описывающий объект с полями name, age, mother. Поле mother должно быть объектом с полями firstName, lastName.
Написать код на свое усмотрение, явно использующий созданный тип
*/

type Obj = {
    name: string,
    age: number,
    mother: {
        firstName: string,
        lastName: string,
    }
}

const person: Obj = {
  age: 22,
  mother: {
    firstName: 'Masha',
    lastName: 'Vasileva',
  },
  name: 'Ramil',
};

console.log(person);
