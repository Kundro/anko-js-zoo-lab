const { Meet } = require('../FoodTypes/Meet');
const { Vegetable } = require('../FoodTypes/Vegetable');
const { Grass } = require('../FoodTypes/Grass');
const { Employee } = require('./Employee');

module.exports.ZooKeeper = class ZooKeeper extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.animalExperience = [];
  }
  AddAnimalExperience(animal) {
    this.animalExperience.push(animal.constructor.name);
    console.log(
      `Zookeeper ${this.firstName} ${this.lastName} now have new experience with ${animal.constructor.name}.`,
    );
  }
  HasAnimalExperience(animal) {
    return this.animalExperience.includes(animal.constructor.name);
  }
  FeedAnimal(animal) {
    if (this.HasAnimalExperience(animal)) {
      switch (animal.constructor.name) {
        case 'Penguin':
          animal.Feed(new Meet(), this);
          break;
        case 'Parrot':
          animal.Feed(new Vegetable(), this);
          break;
        case 'Lion':
          animal.Feed(new Meet(), this);
          break;
        case 'Elephant':
          animal.Feed(new Vegetable(), this);
          break;
        case 'Bison':
          animal.Feed(new Grass(), this);
          break;
        case 'Snake':
          animal.Feed(new Meet(), this);
          break;
        case 'Turtle':
          animal.Feed(new Grass(), this);
          break;
      }
    }
  }
};
