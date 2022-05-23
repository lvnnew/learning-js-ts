/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask16.ts

/*
Задача 16

Тип, содержащий в себе поля двух интерфейсов

Создать 2 интерфейса. "Person" и полями age, name и "Superhero" с полем ability
Создать тип, который, опираясь на 2 данных интерфейса, опишет объект с полями из обоих интерфейсов.
Написать код на свое усмотрение, явно использующий созданный тип
*/

interface Person {
    age: number,
    name: string
}

interface Superhero {
    ability: string[]
}

type HeroType = Person & Superhero & {
    city: string
}

const SpiderMan: HeroType = {
  ability: ['Superhuman strength',
    'speed',
    'reflexes',
    'agility',
    'coordination and balance',
    'Ability to cling to solid surfaces',
    'Accelerated healing',
    'Genius level intellect',
    'Proficient scientist and engineer',
    'Precognitive spider-sense ability',
    'Utilizing wrist-mounted web-shooters',
    'Master martial artist and hand-to-hand combatant'],
  age: 20,
  city: 'Queens',
  name: 'Peter Parker',
};

console.log(SpiderMan);
