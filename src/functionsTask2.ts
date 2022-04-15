/* eslint-disable no-console */
export {};

// yarn ts-node src/functionsTask2.ts

function printStr(xxx = 'печенье') {
  if (xxx === 'аниме') {
    return;
  }
  if (xxx !== 'аниме') {
    console.log('Мишка любит', xxx);
  }
}

printStr();

