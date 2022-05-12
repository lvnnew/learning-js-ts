/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask15.ts

/*
Задача 15

Тип, расширяющий интерфейс

Создать интерфейс Person с полями age, name.
Создать тип, расширяющий созданный интерфейс полем mother
Создать константу, явно указа ее тип созданными типом. Вывести в консоль содеражание константы.
*/

interface Person {
    age: number,
    name: string,
}

type Mom = Person & {
    momName: string,
}

const newPers: Mom = {
  age: 20,
  momName: 'Mary',
  name: 'John',
};

console.log(newPers);
