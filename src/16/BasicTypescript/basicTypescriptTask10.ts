/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask10.ts

/*
    Задача 10

    Интерфейс с энумом

    Создать интерфейс с несколькими полями среди которых будет поле с типом энума (энум тоже нужно создать).
    Создать контсанту, явно указав ее тип с помощью созданного интерфейса. Наполнить ее данными.
    Вывести в консоль поля константы.
    Изменить в объекте поле энума на другое значение энума.
    Снова вывести все поля константы.
*/

enum Fruit {
    Apple = '5 Apples'
}

interface FruitStore {
    adress: string,
    openingHours: string,
    assortment: Fruit,
}

const frutti: FruitStore = {
  adress: '105 av.',
  assortment: Fruit.Apple,
  openingHours: '9 - 18',
};

console.log(frutti);

(Fruit as any).Apple = '10 Apples';
frutti.assortment = Fruit.Apple;

console.log(frutti);
