const { Vegetable } = require('../../FoodTypes/Vegetable');
const { Bird } = require('./Bird');

module.exports.Parrot = class Parrot extends Bird {
  constructor() {
    super();
    this.friends = ['Parrot', 'Bison', 'Elephant', 'Turtle'];
    this.requiredSpaceSqFt = 5;
    let vegetable = new Vegetable();
    this.favouriteFood.push(vegetable.constructor);
  }
};
