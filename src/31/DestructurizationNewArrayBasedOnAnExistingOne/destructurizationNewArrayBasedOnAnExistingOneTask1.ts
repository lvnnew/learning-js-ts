/* eslint-disable no-console */
// yarn ts-node src/31/DestructurizationNewArrayBasedOnAnExistingOne/destructurizationNewArrayBasedOnAnExistingOneTask1.ts

/*
Cats

      Создать массив сats, состоящий из 4 элементов. В каждом - имя кота;
      Создаем новый массив newCats, с теми же котами, но в начало добавляем еще одного кота: const newCats = ['Мурзик', ...сats];;
      Обрати внимание, что мы сперва добавляем в массив нового кота, а потом заполняем его котами из константы сats. Именно в таком порядке они будут лежать в newCats;
      Вывести в консоль получившися масив;
*/

const сats = [
  'Пушок',
  'Персик',
  'Себастьян',
  'Мася',
];

const newCats = ['Мурзик', ...сats];

console.log(newCats);

/*
Dogs

      Создать массив dogs, состоящий из 4 элементов. В каждом - имя собаки;
      Создаем новый массив newDogs, с теми же собаками, но в конец добавляем еще одну собаку: const newDogs = [...dogs, 'Шарик'];;
      Обрати внимание, что мы сперва заполняем новый массив собаками из константы dogs, а потом добавляем в него новую собаку. Именно в таком порядке они будут лежать в newDogs;
      Вывести в консоль получившися масив;
*/

const dogs = [
  'Рыжик',
  'Буся',
  'Альпина',
  'Бубон',
];

const newDogs = [...dogs, 'Шарик'];

console.log(newDogs);

/*
Cows

      Создать массив cows, состоящий из 4 элементов. В каждом - имя коровы;
      Создаем новый массив newCows, с теми же коровами, но в начало добавляем еще одну корову;
      Вывести в консоль получившися масив;
*/

const cows = [
  'Алиса',
  'Буренка',
  'Облачко',
  'Чернушка',
];

const newCows = ['Фрося', ...cows];

console.log(newCows);

/*
Base Words (Базовые слова)

      Создать массив baseWords, состоящий из 4 элементов.
      В первом элементе будет лежать массив деревьев,
      во втором массив фруктов,
      в третьем массив животных,
      в четвертом массив рыб: const baseWords = [['willow', 'pine', 'oak'], ['mango', 'lemon', 'ornage'], ['squirrel', 'hawk', 'deer'], ['tuna', 'perch', 'catfish']];;
      Создать новый массив extendedWords, в котором:
      Первым элементом будет массив, состоящий из слова popular а так же всех деревьев из baseWords;
      Вторым элементом будет массив ягод: blackberry, strawberry, raspberry;
      Третьим элементом, состоящий из всех всех животных из baseWords и слова bear;

const extendedWords = [['popular', ...baseWords[0]], ['blackberry', 'strawberry', 'raspberry'], [...baseWords[2], 'bear']];;

      Вывести в консоль получившийся массив;
*/

const baseWords = [
  ['willow', 'pine', 'oak'],
  ['mango', 'lemon', 'ornage'],
  ['squirrel', 'hawk', 'deer'],
  ['tuna', 'perch', 'catfish'],
];

const extendedWords = [['popular', ...baseWords[0]], ['blackberry', 'strawberry', 'raspberry'], [...baseWords[2], 'bear']];

console.log(extendedWords);

/*
Admin Groups

      Создать массив adminGroups, состоящий из 4 элементов. Каждый элемент массива должен содержать массив имен пользователей. Таким образом у нас получится массив массивов;
      Создать новый массив extendedAdminGroups, в котором:
      Первым элементом будет массив, состоящий из пользователя Сидоров а так же всех пользователей из третьей группы adminGroups;
      Вторым элементом будет первая группа из adminGroups;
      Вывести в консоль получившийся массив;
*/

const adminGroups = [
  ['Анна', 'Арина', 'Аврам', 'Ариель'],
  ['Борис', 'Белатрис', 'Булат', 'Берта'],
  ['Вадим', 'Валентина', 'Валерия', 'Вениамин'],
  ['Гавриил', 'Галина', 'Гордей', 'Гульмира'],
];

const extendedAdminGroups = [['Сидоров', ...adminGroups[2]], [...adminGroups[0]]];

console.log(extendedAdminGroups);
