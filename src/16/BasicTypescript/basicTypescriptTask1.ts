/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask1.ts

/*
Задача 1

Энум

Создать нум с значениями Green, Yellow, Blue
Вывести в консоль значения энума Green, Blue
*/

enum Colors {
    Green = 5,
    Yellow = 10,
    Blue = 31,
}

console.log('Значение Green -', Colors.Green, ',', 'Значение Blue -', Colors.Blue);
