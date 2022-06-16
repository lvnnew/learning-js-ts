/* eslint-disable no-console */
// yarn ts-node src/29/DestructurizationNestedResidualElementsOfTheArray/destructurizationNestedResidualElementsOfTheArrayTask1.ts

/*
Base Words (Базовые слова)

      Создать массив baseWords, состоящий из 4 элементов. В первом элементе будет лежать массив деревьев, во втором массив фруктов, в третьем массив животных,
      в четвертом массив рыб: const baseWords = [['willow', 'pine', 'oak'], ['mango', 'lemon', 'ornage'], ['squirrel', 'hawk', 'deer'], ['tuna', 'perch', 'catfish']];;
      С помощью деструктуризации создать константу trees, в которой будут лежать деревья, константу firstFruit, в которой будет лежать первый фрукт, restFruits,
      в которой буддут лежать оставшиеся фрукты и restWords, в который будут лежать осташиеся массивы слов (животные и рыбы): const [trees, [firstFruit, ...restFruits], ...restWords] = baseWords;
      Вывести в консоль все четыре константы;
*/

const baseWords = [
  ['willow', 'pine', 'oak'],
  ['mango', 'lemon', 'ornage'],
  ['squirrel', 'hawk', 'deer'],
  ['tuna', 'perch', 'catfish'],
];

const [trees, [firstFruit, ...restFruits], ...restWords] = baseWords;

console.log(trees, firstFruit, restFruits, restWords);

/*
User Groups

      Создать массив userGroups, состоящий из 4 элементов. Каждый элемент массива должен содержать массив имен пользователей. Таким образом у нас получится массив массивов;
      С помощью деструктуризации создать константу firstGroup, в которой будут лежать пользователи первой группы, константу firstUserOfSecondGroup,
      в которой будет лежать первый пользователь из второй группы, restUsersOfSecondGroup, в которой будут лежать оставшиеся пользователи из второй группы и restGroups, в которой будут лежать оставшиеся группы;
      Вывести в консоль все четыре константы;
*/

const userGroups = [
  ['Анна', 'Арина', 'Аврам', 'Ариель'],
  ['Борис', 'Белатрис', 'Булат', 'Берта'],
  ['Вадим', 'Валентина', 'Валерия', 'Вениамин'],
  ['Гавриил', 'Галина', 'Гордей', 'Гульмира'],
];

const [firstGroup, [firstUserOfSecondGroup, ...restUsersOfSecondGroup], ...restGroups] = userGroups;

console.log(firstGroup, firstUserOfSecondGroup, restUsersOfSecondGroup, restGroups);
