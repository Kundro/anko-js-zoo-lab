const { Vegetable } = require('../../FoodTypes/Vegetable');
const { Mammal } = require('./Mammal');

module.exports.Elephant = class Elephant extends Mammal {
  constructor() {
    super();
    this.friends = ['Bison', 'Parrots', 'Turtle'];
    this.requiredSpaceSqFt = 1000;
    let vegetable = new Vegetable();
    this.favouriteFood.push(vegetable.constructor);
  }
};
