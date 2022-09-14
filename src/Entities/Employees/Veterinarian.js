const { Antibiotics } = require('../MedicineTypes/Antibiotics');
const { Employee } = require('./Employee');

module.exports.Veterinarian = class Veterinarian extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.animalExperience = [];
  }
  AddAnimalExperience(animal) {
    this.animalExperience.push(animal.constructor.name);
    console.log(
      `Veterinarian ${this.firstName} ${this.lastName} now have new experience with ${animal.constructor.name}.`,
    );
  }
  HasAnimalExperience(animal) {
    return this.animalExperience.includes(animal.constructor.name);
  }
  HealAnimal(animal) {
    if (this.HasAnimalExperience(animal)) {
      let medicine = new Antibiotics();
      return animal.Heal(medicine);
    }
  }
};
