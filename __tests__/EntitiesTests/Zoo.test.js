const { Parrot } = require('../../src/Entities/Animals/Bird/Parrot');
const { Lion } = require('../../src/Entities/Animals/Mammal/Lion');
const { Veterinarian } = require('../../src/Entities/Employees/Veterinarian');
const { ZooKeeper } = require('../../src/Entities/Employees/ZooKeeper');
const { Enclosure } = require('../../src/Entities/Enclosure');
const { FeedTime } = require('../../src/Entities/FoodTypes/FeedTime');
const { Zoo } = require('../../src/Entities/Zoo');

describe('Should be able to create ZooApp', () => {
  test('Should be able to create Zoo', () => {
    let zoo = new Zoo('testLocation1');
    expect(zoo).not.toBe(null);
  });
  test('Should be able to create Zoo with location name', () => {
    let zoo = new Zoo('testLocation2');
    expect(zoo.location).toBe('testLocation2');
  });
  test('Should be able to find available enclosure', () => {
    let zoo1 = new Zoo('testLocation3');
    let enclosure1 = new Enclosure('Lions', 4500);
    zoo1.AddEnclosure(enclosure1);
    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);
  });
  test('Should be able to create findavailable enclosure', () => {
    let zoo1 = new Zoo('testLocation3');
    let enclosure1 = new Enclosure('Lions', 4500);
    zoo1.AddEnclosure(enclosure1);
    let lion1 = new Lion();
    expect(zoo1.FindAvailableEnclosure(lion1)).toBe(enclosure1);
  });
  test('Should not be able to create findavailable enclosure because no friends', () => {
    let zoo1 = new Zoo('testLocation3');
    let enclosure1 = new Enclosure('Lions', 4500);
    zoo1.AddEnclosure(enclosure1);
    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);
    let parrot1 = new Parrot();
    expect(zoo1.FindAvailableEnclosure(parrot1)).not.toBe(enclosure1);
    expect(enclosure1.animals.includes(lion1.constructor.name)).toBe(true);
  });
  test('Should not be able to find available enclosure', () => {
    let zoo1 = new Zoo('testLocation5');
    let enclosure1 = new Enclosure('Lions', 4500);
    let enclosure2 = new Enclosure('Parrots', 100);
    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);
    let lion1 = new Lion();
    let parrot1 = new Parrot();
    zoo1.AddAnimal(lion1);
    let foundEnclosure = zoo1.FindAvailableEnclosure(parrot1);
    expect(foundEnclosure).toBe(enclosure2);
  });
  test('Should not be able to find at least one enclosure', () => {
    let zoo1 = new Zoo('testLocation6');
    let parrot1 = new Parrot();
    expect(zoo1.FindAvailableEnclosure(parrot1)).toBe(null);
  });
  test('Should not be able to hire employee', () => {
    let zoo1 = new Zoo('testLocation7');
    let enclosure1 = new Enclosure('Lions', 4500);
    let enclosure2 = new Enclosure('Birds', 25);

    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);

    let lion1 = new Lion();
    let parrot1 = new Parrot();
    zoo1.AddAnimal(lion1);
    zoo1.AddAnimal(parrot1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');
    let veterinarian1 = new Veterinarian('name2', 'surname2');

    zookeeper1.AddAnimalExperience(new Parrot());
    zookeeper1.AddAnimalExperience(new Lion());
    veterinarian1.AddAnimalExperience(new Parrot());
    veterinarian1.AddAnimalExperience(new Lion());

    zoo1.HireEmployee(zookeeper1);
    zoo1.HireEmployee(veterinarian1);
    expect(zoo1.employees.includes(zookeeper1)).toBe(true);
    expect(zoo1.employees.includes(veterinarian1)).toBe(true);
  });
  test('Should not be able to hire employee', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);
    let enclosure2 = new Enclosure('Birds', 25);

    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);

    let lion1 = new Lion();
    let parrot1 = new Parrot();
    zoo1.AddAnimal(lion1);
    zoo1.AddAnimal(parrot1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');
    let veterinarian1 = new Veterinarian('name2', 'surname2');

    zoo1.HireEmployee(zookeeper1);
    zoo1.HireEmployee(veterinarian1);
    expect(zoo1.employees.includes(zookeeper1)).toBe(false);
    expect(zoo1.employees.includes(veterinarian1)).toBe(false);
  });
  test('Should be able to feed animals', () => {
    let zoo1 = new Zoo('testLocation9');
    let enclosure1 = new Enclosure('Lions', 4500);
    let enclosure2 = new Enclosure('Birds', 25);

    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);

    let lion1 = new Lion();
    let parrot1 = new Parrot();
    zoo1.AddAnimal(lion1);
    zoo1.AddAnimal(parrot1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');
    zookeeper1.AddAnimalExperience(new Parrot());
    zookeeper1.AddAnimalExperience(new Lion());
    zoo1.HireEmployee(zookeeper1);
    let feedTime = new FeedTime().feedTime;
    zoo1.FeedAnimals();
    expect(parrot1.feedTimes.includes(feedTime)).toBe(true);
  });
  test('Should be able to heal animals', () => {
    let zoo1 = new Zoo('testLocation10');
    let enclosure1 = new Enclosure('Lions', 4500);
    let enclosure2 = new Enclosure('Birds', 25);

    zoo1.AddEnclosure(enclosure1);
    zoo1.AddEnclosure(enclosure2);

    let lion1 = new Lion();
    let parrot1 = new Parrot();
    zoo1.AddAnimal(lion1);
    zoo1.AddAnimal(parrot1);

    let veterinarian1 = new Veterinarian('name1', 'surname1');
    veterinarian1.AddAnimalExperience(new Parrot());
    veterinarian1.AddAnimalExperience(new Lion());
    zoo1.HireEmployee(veterinarian1);
    lion1.isSick = true;
    parrot1.isSick = true;
    expect(lion1.IsSick()).toBe(true);
    expect(parrot1.IsSick()).toBe(true);
    zoo1.HealAnimals();
    expect(lion1.IsSick()).toBe(false);
    expect(parrot1.IsSick()).toBe(false);
  });
});
