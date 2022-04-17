/* eslint-disable no-console */
/* eslint-disable eol-last */
export {};

// yarn ts-node src/anonymousFunctionsTask3.ts
// В данном случае значение параметра задано как по умолчанию
const printStr = (arg = 'Параметр') => {
  console.log(arg, 'Но это не точно');
};

printStr();

// Вариант с передачей параметра в моменте вызове функции
const printString = (arg: string) => {
  console.log(arg, 'Но это не точно');
};

printString('Параметр');