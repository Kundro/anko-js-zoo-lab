const { Reptile } = require('./Reptile');
const { Grass } = require('../../FoodTypes/Grass');

module.exports.Turtle = class Turtle extends Reptile {
  constructor() {
    super();
    this.friends = ['Parrots', 'Bison', 'Elephant', 'Turtle'];
    this.requiredSpaceSqFt = 2;
    let grass = new Grass();
    this.favouriteFood.push(grass.constructor);
  }
};
