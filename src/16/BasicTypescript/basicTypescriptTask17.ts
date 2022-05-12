/* eslint-disable no-console */
export {};

// yarn ts-node src/16/BasicTypescript/basicTypescriptTask17.ts

/*
Задача 17

Тип функции, принимающей тип и возвращающей интерфейс

Создать тип, представляющий собой число или строку.
Создать интерфейс с полем resultedType: string
Создать тип, описывающий функцию, которая принимает созданный тип а возвращает созданный интерфейс.
Если в функцию было передано число, в возвращаемом объекте в resultedType должно лежать "number", если была передана строка, в возвращаемомо объекте в resultedType должно лежать "string"
Вывести в консоль результат функции, передав в нее сперва число а потом строку
*/

type NumOrStr = string | number

interface Result {
    resultedType: string
}

type GetType = (x: NumOrStr) => Result

const resPrint: GetType = (a) => {
  if (typeof a === 'number') {
    const res: Result = {
      resultedType: 'number',
    };

    return res;
  } else {
    const res: Result = {
      resultedType: 'string',
    };

    return res;
  }
};

console.log(resPrint(5));
console.log(resPrint('5'));
