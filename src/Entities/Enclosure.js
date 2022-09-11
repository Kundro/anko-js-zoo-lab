module.exports.Enclosure = class Enclosure {
  constructor(name, squareFeet, zoo) {
    this.name = name;
    this.animals = [];
    this.squareFeet = squareFeet;
    this.parentZoo = zoo;
  }
  AddAnimal(animal) {
    this.animals.push(animal);
    console.log(`${animal} added in ${this.name} enclosure.`);
  }
};
