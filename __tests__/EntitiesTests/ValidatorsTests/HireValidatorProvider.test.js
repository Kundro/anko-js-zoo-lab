const { Lion } = require('../../../src/Entities/Animals/Mammal/Lion');
const {
  Veterinarian,
} = require('../../../src/Entities/Employees/Veterinarian');
const { ZooKeeper } = require('../../../src/Entities/Employees/ZooKeeper');
const { Enclosure } = require('../../../src/Entities/Enclosure');
const { Zoo } = require('../../../src/Entities/Zoo');

describe('Should be able to create provider', () => {
  test('Should be able to create hire veterinarian validator provider', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    let veterinarian1 = new Veterinarian('name2', 'surname2');
    veterinarian1.AddAnimalExperience(new Lion());
    zoo1.HireEmployee(veterinarian1);

    expect(zoo1.employees.includes(veterinarian1)).toBe(true);
  });
  test('Should be able to create hire zookeeper validator provider', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    let zookeeper1 = new ZooKeeper('name1', 'surname1');
    zookeeper1.AddAnimalExperience(new Lion());
    zoo1.HireEmployee(zookeeper1);

    expect(zoo1.employees.includes(zookeeper1)).toBe(true);
  });
  test('Should not be able to create hire validator provider', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    try {
      expect(zoo1.HireEmployee(lion1)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe(
        `For ${lion1.constructor.name} class no available validators.`,
      );
    }
  });
});
