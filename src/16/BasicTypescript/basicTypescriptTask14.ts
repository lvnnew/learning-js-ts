/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask14.ts

/*
Задача 14

Интерфейс, с полями, определяемыми типами

Создать 2 типа, один содержащий строку или булеан, второй описывающий объект с несколькими полями.
Создать интерфейс, описывающий объект, с несколькими полями. 2 из которых должны быть созданными ранее типами.
Написать код на свое усмотрение, явно использующий созданный интерфейс
*/

type Job = {
    work: boolean | string,
}

type PersInfo = {
    name: string,
    age: number,
}

interface Person {
    city: string,
    infoOfPerson: PersInfo,
    workInfo: Job,
}

const onePerson: Person = {
  city: 'Omsk',
  infoOfPerson: {
    age: 30,
    name: 'Roman',
  },
  workInfo: {
    work: true,
  },
};

console.log(onePerson);
