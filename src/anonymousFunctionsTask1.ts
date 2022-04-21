/* eslint-disable no-console */
export {};

// yarn ts-node src/anonymousFunctionsTask1.ts
// немедленновызываемая анонимная функция
(function() {
  console.log('We are the champions');
})();

// анонимная функция
const printStr = function () {
  console.log('We are the champions');
};

printStr();
