module.exports.VeterinarianHireValidator = class VeterinarianHireValidator {
  constructor() {
    this.errors = [];
  }
  ValidateEmployee(employee, zoo) {
    if (!(employee.constructor.name == 'Veterinarian')) {
      this.errors.push(
        `Employee ${employee.firstName} ${employee.lastName} must be a veterinarian to take VeterinarianHireValidator.`,
      );
      return this.errors;
    }
    let allAnimals = [];
    let allAnimalTypes = [
      'Penguin',
      'Parrot',
      'Lion',
      'Elephant',
      'Bison',
      'Snake',
      'Turtle',
    ];
    zoo.enclosures.forEach((enclosure) => {
      enclosure.animals.forEach((animal) => {
        allAnimals.push(animal);
      });
    });

    for (let i = allAnimalTypes.length - 1; i >= 0; i--) {
      if (!allAnimals.includes(allAnimalTypes[i])) {
        let index = allAnimalTypes.indexOf(allAnimalTypes[i]);
        allAnimalTypes.splice(index, 1);
      }
    }
    allAnimalTypes.forEach((animalType) => {
      if (!employee.animalExperience.includes(animalType)) {
        this.errors.push(
          `Veterinarian ${employee.firstName} ${employee.lastName} must have an experience to wotk with ${animalType}.`,
        );
      }
    });
    return this.errors;
  }
};
