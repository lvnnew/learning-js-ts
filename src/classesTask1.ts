/* eslint-disable no-console */
export {};

// yarn ts-node src/classesTask1.ts

/*
  Задача 1.

  Создать класс MyClass.
  В конструктор добавить строковые параметры: имя и фамилию.
  В метод добавить вывод в формате “ИМЯ ФАМИЛИЯ, к доске!” шаблонной строкой.
  Создать константу classmate, поместив в нее инстанс класса MyClass, передав параметры в конструктор
  Вызвать метод.
*/

class MyClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(`${this.firstName} ${this.lastName}, к доске!`);
  }
}

const classmate = new MyClass('Вася', 'Пупкин');
classmate.sayName();

const classmate1 = new MyClass('Василиса', 'Степанова');
classmate1.sayName();
