const {
  HireValidatorProvider,
} = require('../Validators/HireValidatorProvider');

module.exports.Zoo = class Zoo {
  constructor(location) {
    this.enclosures = [];
    this.employees = [];
    this.location = location;
    console.log(`Created new zoo in ${this.location}.`);
  }
  AddEnclosure(enclosure) {
    this.enclosures.push(enclosure);
    enclosure.parentZoo = this;
    console.log(
      `Added new enclosure "${enclosure.name}" with square feet: ${enclosure.squareFeet} ft to ${this.location} zoo.`,
    );
  }
  FindAvailableEnclosure(animal) {
    if (this.enclosures.length > 0) {
      for (let i = 0; i < this.enclosures.length; i++) {
        let enclosureOccupiedSpace = 0;
        let isFriendly = true;
        for (let j = 0; j < this.enclosures[i].animals.length; j++) {
          enclosureOccupiedSpace +=
            this.enclosures[i].animals[j].requiredSpaceSqFt;
          if (!animal.IsFriendlyWith(this.enclosures[i].animals[j]))
            isFriendly = false;
        }
        if (
          enclosureOccupiedSpace + animal.requiredSpaceSqFt <
            this.enclosures[i].squareFeet &&
          isFriendly
        ) {
          console.log('Found an enclosure.');
          return this.enclosures[i];
        } else {
          console.log('No enclosures available.');
        }
      }
    } else {
      console.log('At least one enclosure required.');
      return null;
    }
  }
  HireEmployee(employee) {
    let hireValidatorProvider = new HireValidatorProvider();
    let zooKeeperValidator = hireValidatorProvider.GetHireValidator(employee);
    let errors = zooKeeperValidator.ValidateEmployee(employee, this);
    if (!errors.length) {
      this.employees.push(employee);
      console.log(
        `Employee ${employee.firstName} ${employee.lastName} hired to zoo (${this.location}).`,
      );
    } else if (errors.length) {
      console.log(
        `Employee ${employee.firstName} ${employee.lastName} not hired to zoo (${this.location}).`,
      );
    }
  }
  FeedAnimals() {
    this.enclosures.forEach((enclosure) => {
      enclosure.animalTypes.forEach((enclosureAnimal) => {
        this.employees.forEach((employee) => {
          if (employee.constructor.name == 'ZooKeeper') {
            if (employee.HasAnimalExperience(enclosureAnimal)) {
              employee.FeedAnimal(enclosureAnimal);
            }
          }
        });
      });
    });
  }
  HealAnimals() {
    this.enclosures.forEach((enclosure) => {
      enclosure.animalTypes.forEach((enclosureAnimal) => {
        this.employees.forEach((employee) => {
          if (employee.constructor.name == 'Veterinarian') {
            if (employee.HasAnimalExperience(enclosureAnimal)) {
              employee.HealAnimal(enclosureAnimal);
            }
          }
        });
      });
    });
  }
  AddAnimal(animal) {
    let enclosure = this.FindAvailableEnclosure(animal);
    if (enclosure.constructor.name == 'Enclosure') {
      enclosure.AddAnimal(animal);
    }
  }
};
