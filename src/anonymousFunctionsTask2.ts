/* eslint-disable no-console */
export {};

// yarn ts-node src/anonymousFunctionsTask2.ts
// стрелочная функция
const printStr = () => console.log('We are the champions');

printStr();

// немедленновызываемая стрелочная функция
(() => console.log('We are the champions')
)();
