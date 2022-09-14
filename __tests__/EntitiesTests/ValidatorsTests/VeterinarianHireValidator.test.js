const { Lion } = require('../../../src/Entities/Animals/Mammal/Lion');
const { ZooKeeper } = require('../../../src/Entities/Employees/ZooKeeper');
const { Enclosure } = require('../../../src/Entities/Enclosure');
const { Zoo } = require('../../../src/Entities/Zoo');
const {
  VeterinarianHireValidator,
} = require('../../../src/Validators/VeterinarianHireValidator');

describe('Should be able to validate zookeeper', () => {
  test('Should be able to create hire zookeeper validator', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    let zookeeper1 = new ZooKeeper('name2', 'surname2');
    zookeeper1.AddAnimalExperience(new Lion());

    const validator = new VeterinarianHireValidator();
    validator.ValidateEmployee(zookeeper1);
    expect(
      validator.errors.includes(
        `Employee ${zookeeper1.firstName} ${zookeeper1.lastName} must be a zookeeper to take ZooKeeperHireValidator.`,
      ),
    );
  });
});
