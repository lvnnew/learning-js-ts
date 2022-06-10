/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable no-console */

export {};

// yarn ts-node src/19/TsDestructuring/tsDestructuringTask1.ts

/*
В самом начале файла нужно добавить строку // @ts-nocheck
*/

/*
Деструктуризация массива

    Создать массив drinks из трех элементов: const drinks = ['tea', 'coffee', 'juice'];
    С помощью деструктуризации вытащить первое и второе значение массива: const [tea, coffee] = drinks;
    Вывести в консоль извлеченные из массива элементы tea и coffee;
*/

const drinks = [
  'tea',
  'coffe',
  'juice',
];

const [tea, coffee] = drinks;

console.log(tea, coffee);

/*
Деструктуризация объекта со значениями по-умолчанию

    Создать объект car cо свойствами model, price: number, color;
    С помощью деструктуризации вытащить свойства model, price, color и owner. Для всех полей должны быть заданы значения по-умолчанию: const {model = 'Unknown model', price = 0, color = 'Unknown color', owner = 'Unknown owner'} = car;
    Вывести в консоль извлеченные из объекта свойства model, price, color и owner;
*/

type Car = {
    color: string,
    model: string,
    price: number,
    owner?: string,
}

const car: Car = {
  color: 'Red',
  model: '40',
  price: 1000,
};

const {model = 'Unknown model', price = 0, color = 'Unknown color', owner = 'Unknown owner'} = car;

console.log(model, price, color, owner);

/*
Новый массив на основе существующего через дестуктуризацию

    Создать массив trips, состоящий из нескольких строк, содержащий названия стран;
    Создать новый массив newTrips, с помощью spread-оператра, в котором будут все элементы из trips и еще одна страна: const newTrips = ['Jamaica', ...trips];
    Вывести в консоль получившийся массив;
*/

const trips = [
  'Россия',
  'Беларусь',
  'Финляндия',
];

const newTrips = ['Jamaica', ...trips];

console.log(newTrips);
