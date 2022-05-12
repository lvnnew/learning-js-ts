/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask18.ts

/*
Задача 18

Интерфейс, расширыющий поля другого интерфейса

Создать 2 интерфейса. "Person" и полями age, name.
Создать интерфейс "Superhero", который расширит интерфейс "Person" полем ability
Написать код на свое усмотрение, явно использующий созданный тип
*/

interface Person {
    age: number,
    name: string,
}

interface Superhero extends Person {
    ability: string
}

const superMan: Superhero = {
  ability: 'Unlimited Power',
  age: 30,
  name: 'Klark Kent',
};

console.log(superMan);
