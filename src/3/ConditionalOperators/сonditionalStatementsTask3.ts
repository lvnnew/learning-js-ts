/* eslint-disable prefer-const */
import {log} from '../../log';

// yarn ts-node src/сonditionalStatementsTask3.ts

/*
Задача 3

Создать 2 переменные: val1, val2
Вывести в консоль

      фразу “первое число больше второго”, если первое число, больше второго числа,
      фразу “второе число больше первого”, если первое число, меньше второго,
      фразу “числа равны”, если числа равны.

Проверить работу скрипта со следующими переменными:
(3, 4) - в консоль выведется “второе число больше первого”
(4; 3) - в консоль выведется “первое число больше второго”
(3; 3) - в консоль выведется “числа равны”
*/

let val1 = 10;
let val2 = 10;

const app = () => {
  if (val1 > val2) {
    log.info('первое число больше второго');
  } else if (val1 < val2) {
    log.info('первое число меньше второго');
  } else {
    log.info('числа равны');
  }
};

app();
