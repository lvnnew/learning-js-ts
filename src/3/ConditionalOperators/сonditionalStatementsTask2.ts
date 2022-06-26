/* eslint-disable prefer-const */
import {log} from '../../log';

// yarn ts-node src/сonditionalStatementsTask2.ts

/*
Задача 2

Создать 3 переменные: first, val1, val2
Вывести в консоль сумму всех чисел, если первое число положительное, и разность второго и третьего числа, если первое число отрицательное или равно 0.
Проверить работу скрипта с обоими видами операций
*/

let first = 5;
let val1 = 20;
let val2 = 10;

const app = () => {
  if (first > 0) {
    log.info(first + val1 + val2);
  } else if (first <= 0) {
    log.info(val1 - val2);
  }
};

app();
