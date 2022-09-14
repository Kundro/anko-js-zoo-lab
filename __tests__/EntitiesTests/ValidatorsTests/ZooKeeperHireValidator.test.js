const { Lion } = require('../../../src/Entities/Animals/Mammal/Lion');
const {
  Veterinarian,
} = require('../../../src/Entities/Employees/Veterinarian');
const { Enclosure } = require('../../../src/Entities/Enclosure');
const { Zoo } = require('../../../src/Entities/Zoo');
const {
  ZooKeeperHireValidator,
} = require('../../../src/Validators/ZooKeeperHireValidator');

describe('Should be able to validate veterinarian', () => {
  test('Should be able to create hire veterinarian validator', () => {
    let zoo1 = new Zoo('testLocation8');
    let enclosure1 = new Enclosure('Lions', 4500);

    zoo1.AddEnclosure(enclosure1);

    let lion1 = new Lion();
    zoo1.AddAnimal(lion1);

    let veterinarian1 = new Veterinarian('name2', 'surname2');
    veterinarian1.AddAnimalExperience(new Lion());

    const validator = new ZooKeeperHireValidator();
    validator.ValidateEmployee(veterinarian1);
    expect(
      validator.errors.includes(
        `Employee ${veterinarian1.firstName} ${veterinarian1.lastName} must be a zookeeper to take ZooKeeperHireValidator.`,
      ),
    );
  });
});
