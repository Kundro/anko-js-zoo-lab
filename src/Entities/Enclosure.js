module.exports.Enclosure = class Enclosure {
  constructor(name, squareFeet) {
    this.name = name;
    this.animals = [];
    this.animalTypes = [];
    this.squareFeet = squareFeet;
    this.parentZoo;
  }
  AddAnimal(animal) {
    this.animals.push(animal.constructor.name);
    this.animalTypes.push(animal);
    console.log(`${animal.constructor.name} added in ${this.name} enclosure.`);
  }
};
