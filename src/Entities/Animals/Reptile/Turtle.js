const Reptile = require('./Reptile');

module.exports.Turtle = class Turtle extends Reptile {
  constructor() {
    super();
    this.friends = ['Parrots', 'Bison', 'Elephant', 'Turtle'];
    this.requiredSpaceSqFt = 2;
  }
};