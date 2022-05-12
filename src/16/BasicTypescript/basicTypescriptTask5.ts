/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask5.ts

/*
Задача 5

Интерфейс со вложенным объектом

Создать интерфейс с полями name, age, mother. Поле mother должно быть объектом с полями firstName, lastName.
Написать код на свое усмотрение, явно использующий созданный интерфейс
*/

interface People {
  name: string
  age: number
  mother?:{
    firstName: string,
    lastName: string,
  }
}

const whoIs = (person: People) => console.log('Hello ' + person.name);

const newPerson = {age: 7, mother: {firstName: 'Anna', lastName: 'Ivanova'}, name: 'Alex'};

whoIs(newPerson);
