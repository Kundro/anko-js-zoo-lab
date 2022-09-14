const { Parrot } = require('../../../src/Entities/Animals/Bird/Parrot');
const { Lion } = require('../../../src/Entities/Animals/Mammal/Lion');
const { Penguin } = require('../../../src/Entities/Animals/Bird/Penguin');
const { Elephant } = require('../../../src/Entities/Animals/Mammal/Elephant');
const { Bison } = require('../../../src/Entities/Animals/Mammal/Bison');
const { Snake } = require('../../../src/Entities/Animals/Reptile/Snake');
const { Turtle } = require('../../../src/Entities/Animals/Reptile/Turtle');
const { ZooKeeper } = require('../../../src/Entities/Employees/ZooKeeper');
const { Enclosure } = require('../../../src/Entities/Enclosure');
const { Zoo } = require('../../../src/Entities/Zoo');
const { FeedTime } = require('../../../src/Entities/FoodTypes/FeedTime');

describe('Should be able to create zookeeper', () => {
  test('Should be able to create zookeeper', () => {
    let zoo1 = new Zoo('testLocation1');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');

    zoo1.HireEmployee(zookeeper1);
    expect(zoo1.employees.includes(zookeeper1)).toBe(false);
    expect(zookeeper1.firstName).toBe('name1');
    expect(zookeeper1.lastName).toBe('surname1');
  });
  test('Should be able to feed all animals by zookeeper', () => {
    let zoo1 = new Zoo('testLocation2');
    let enclosure1 = new Enclosure('enclosure1', 4500);
    let enclosure2 = new Enclosure('enclosure2', 5000);
    let enclosure3 = new Enclosure('enclosure3', 4000);
    let enclosure4 = new Enclosure('enclosure4', 4000);
    let enclosure5 = new Enclosure('enclosure5', 4000);
    let enclosure6 = new Enclosure('enclosure6', 4000);
    let enclosure7 = new Enclosure('enclosure7', 4000);

    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);
    zoo1.AddEnclosure(enclosure3);
    zoo1.AddEnclosure(enclosure4);
    zoo1.AddEnclosure(enclosure5);
    zoo1.AddEnclosure(enclosure6);
    zoo1.AddEnclosure(enclosure7);

    let lion1 = new Lion();
    let penguin1 = new Penguin();
    let parrot1 = new Parrot();
    let elephant1 = new Elephant();
    let bison1 = new Bison();
    let snake1 = new Snake();
    let turtle1 = new Turtle();

    zoo1.AddAnimal(lion1);
    zoo1.AddAnimal(penguin1);
    zoo1.AddAnimal(parrot1);
    zoo1.AddAnimal(elephant1);
    zoo1.AddAnimal(bison1);
    zoo1.AddAnimal(snake1);
    zoo1.AddAnimal(turtle1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');
    zookeeper1.AddAnimalExperience(new Lion());
    zookeeper1.AddAnimalExperience(new Penguin());
    zookeeper1.AddAnimalExperience(new Parrot());
    zookeeper1.AddAnimalExperience(new Elephant());
    zookeeper1.AddAnimalExperience(new Bison());
    zookeeper1.AddAnimalExperience(new Snake());
    zookeeper1.AddAnimalExperience(new Turtle());

    zoo1.HireEmployee(zookeeper1);
    zoo1.FeedAnimals();

    expect(zoo1.employees.includes(zookeeper1)).toBe(true);
    expect(zookeeper1.firstName).toBe('name1');
    expect(zookeeper1.lastName).toBe('surname1');

    let feedTime = new FeedTime().feedTime;
    expect(penguin1.feedTimes.includes(feedTime)).toBe(true);
    expect(parrot1.feedTimes.includes(feedTime)).toBe(true);
    expect(lion1.feedTimes.includes(feedTime)).toBe(true);
    expect(bison1.feedTimes.includes(feedTime)).toBe(true);
    expect(elephant1.feedTimes.includes(feedTime)).toBe(true);
    expect(turtle1.feedTimes.includes(feedTime)).toBe(true);
    expect(snake1.feedTimes.includes(feedTime)).toBe(true);
  });
});
