/* eslint-disable no-console */
export {};

// yarn ts-node src/15/ObjectAdditionalTasks/objectAdditionalTask1.ts

/*
Задача 1

Создать объект с 3 полями: firstField, secondField, sumMethod. В firstField положить 3, в secondField 5 а в sumMethod метод, который вернет сумму полей firstField и secondField
Вызвать метод sumMethod, вывести его результат в консоль
В поле объекта firstField положить случаное число, вывести в консоль поле объекта firstField
Еще раз вывести в консоль результат вызова функции sumMethod
*/

const objectSum = {
  firstField: 6,
  secondField: 9,
  sumMethod: () => {
    return objectSum.firstField + objectSum.secondField;
  },
};

console.log('Первый вывод -', objectSum.sumMethod());

objectSum.firstField = 20;

console.log('Второй вывод -', objectSum.sumMethod());
