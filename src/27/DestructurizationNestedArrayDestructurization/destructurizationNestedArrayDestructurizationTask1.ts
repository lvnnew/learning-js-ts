/* eslint-disable no-console */

// yarn ts-node src/27/DestructurizationNestedArrayDestructurization/destructurizationNestedArrayDestructurizationTask1.ts

/*
Base Words (Базовые слова)

      Создать массив baseWords, состоящий из 4 элементов. В первом элементе будет лежать массив деревьев, во втором массив фруктов, в третьем массив животных,
      в четвертом массив рыб: const baseWords = [['willow', 'pine', 'oak'], ['mango', 'lemon', 'ornage'], ['squirrel', 'hawk', 'deer'], ['tuna', 'perch', 'catfish']];;
      С помощью деструктуризации создать константу trees, в которой будут лежать деревья, константу secondFruit, в которой будет лежать второй фрукт и thirdAnimal,
      в которой будет лежать третье животное: const [trees, [,secondFruit], , [,, thirdAnimal]] = baseWords;
      Вывести в консоль все три константы;
*/

const baseWords = [
  ['willow', 'pine', 'oak'],
  ['mango', 'lemon', 'ornage'],
  ['squirrel', 'hawk', 'deer'],
  ['tuna', 'perch', 'catfish'],
];

const [trees, [, secondFruit], , [,, thirdAnimal]] = baseWords;

console.log(trees, secondFruit, thirdAnimal);

/*
Manager Groups

      Создать массив managerGroups, состоящий из 4 элементов. Каждый элемент массива должен содержать массив имен пользователей. Таким образом у нас получится массив массивов;
      С помощью деструктуризации создать константу firstGroup, в которой будут лежать пользователи из первой группы, константу firstManagerOfSecondGroup,
      в которой будет лежать первый пользователь из второй группы и thirdManagerOfFourGroup, в которой будет лежать третий пользователь из четвертой группы;
      Вывести в консоль все три константы;
*/

const managerGroups = [
  ['Иван', 'Мария', 'Светлана', 'Кирил'],
  ['Леонид', 'Василий', 'Константин', 'Анна'],
  ['Александр', 'Кристина', 'Людмила', 'Евгения'],
  ['Любовь', 'Григорий', 'Анастасия', 'Степан'],
];

const [firstGroup, [firstManagerOfSecondGroup],, [,, thirdManagerOfFourGroup]] = managerGroups;

console.log(firstGroup, firstManagerOfSecondGroup, thirdManagerOfFourGroup);

