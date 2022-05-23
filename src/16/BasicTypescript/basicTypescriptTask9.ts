/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask9.ts

/*
Задача 9

Интерфейс со вложенным интерфейсом

Создать интерфейс "Parent" с полями firstName, lastName.
Создать интерфейс Child с полями name, age, mother, father. Поля mother и father должны иметь тип "Parent".
Создать константу, явно указав ее тип с помощью созданного интерфейса "Child".
Вывести в консоль содержание константы
*/

interface Parent {
    firstName: string,
    lastName: string
}

interface Child {
    age: number,
    mother: Parent,
    father: Parent
}

const person: Child = {
  age: 18,
  father: {
    firstName: 'Egor',
    lastName: 'Titov',
  },
  mother: {
    firstName: 'Anna',
    lastName: 'Titova',
  },
};

console.log(person);
