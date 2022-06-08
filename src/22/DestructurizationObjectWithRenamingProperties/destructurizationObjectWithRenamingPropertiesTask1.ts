/* eslint-disable unicorn/no-unused-properties */
/* eslint-disable no-console */

// yarn ts-node src/22/DestructurizationObjectWithRenamingProperties/destructurizationObjectWithRenamingPropertiesTask1.ts

/*
Bottle Of Water (Бутылка воды)

      Создать объект bottleOfWater cо своствами producer, volume;
      С помощью деструктуризации вытащить свойства producer положив его в константу manufacturer: const {producer: manufacturer} = bottleOfWater;
      Вывести в консоль константу manufacturer;
*/

const bottleOfWater = {
  producer: 'CHUP Horns and hooves',
  volume: '4956',
};

const {producer: manufacturer} = bottleOfWater;

console.log(manufacturer);

/*
Ticket (Билет)

      Создать объект ticket cо своствами from, to, price;
      С помощью деструктуризации вытащить свойства from и to положив их в константы departure и arrival соответственно;
      Вывести в консоль константы departure и arrival;
*/

const ticket = {
  from: 'Berlin',
  price: 1000,
  to: 'Moscow',
};

const {from: departure, to: arrival} = ticket;

console.log(departure, arrival);

/*
Passenger (Пассажир)

      Создать объект passenger cо своствами firstName, lastName, phones. В phones положить несколько контактных телефонов пассажира;
      С помощью деструктуризации вытащить свойства firstName и phones положив их в константы name и conactPhones соответственно;
      Вывести в консоль константы name и conactPhones;
*/

const passenger = {
  firstName: 'Жора',
  lastName: 'Орехов',
  phones: {
    num1: '+734557684512',
    num2: '+76484574509',
    num3: '+72540983487',
  },
};

const {firstName: name1, phones: conactPhones} = passenger;

console.log(name1, conactPhones);
