const Enclosure = require('./Enclosure');

module.exports.Zoo = class Zoo {
  constructor(location) {
    this.enclosures = [];
    this.employees = [];
    this.location = location;
    console.log(`Created new zoo in ${this.location}.`);
  }
  AddEnclosure(name, squareFeet) {
    let enclosure = new Enclosure(name, squareFeet, this);
    this.enclosures.push(enclosure);
    console.log(
      `Added new enclosure "${name}" with square feet: ${squareFeet} sq ft.`,
    );
  }
  FindAvailableEnclosure(animal) {
    let enclosureOccupiedSpace = 0;
    let isFriendly = true;
    if (this.enclosures.length !== 0) {
      this.enclosures.forEach((enclosure) => {
        enclosure.animals.forEach((enclosureAnimal) => {
          enclosureOccupiedSpace += enclosureAnimal.requiredSpaceSqFt;
        });
        if (
          !(
            enclosureOccupiedSpace + animal.requiredSpaceSqFt >
            enclosure.squareFeet
          )
        ) {
          enclosure.animals.forEach((enclosureAnimal) => {
            if (!enclosureAnimal.IsFriendlyWith(animal)) isFriendly = false;
          });
        }
        if (isFriendly == true) {
          return enclosure;
        } else console.log('No enclosures available.');
      });
    } else console.log('At least one enclosure required.');
  }
  HireEmployee(employee) {}
  FeedAnimals(time) {}
  HealAnimals(time) {}
  AddAnimal(animal) {
    let availableEnclosure = this.FindAvailableEnclosure(animal);
    if (availableEnclosure !== null) {
      availableEnclosure.AddAnimal(animal);
    } else
      console.log(`You cannot add ${animal.className} to a filled enclosure.`);
  }
};
