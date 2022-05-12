/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask13.ts

/*
Задача 13

Тип, содержащий объект с полем, определяемым интерфесом

Создать интерфейс с несколькими полями разных типов.
Создать тип, описывающий объект с несколькими полями, одно из которых будет созданным интерфейсом.
Написать код на свое усмотрение, явно использующий созданный тип
*/

interface Person{
    age: number
    name: string
}

type info = {
    basicInfo: Person,
    lastName: string,
    personId: number,
}

const infoPerson: info = {
  basicInfo: {
    age: 40,
    name: 'Stas',
  },
  lastName: 'Stepnoi',
  personId: 45646,
};

console.log(infoPerson);
