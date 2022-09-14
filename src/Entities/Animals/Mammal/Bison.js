const { Mammal } = require('./Mammal');
const { Grass } = require('../../FoodTypes/Grass');

module.exports.Bison = class Bison extends Mammal {
  constructor() {
    super();
    this.friends = ['Elephant'];
    this.requiredSpaceSqFt = 1000;
    let grass = new Grass();
    this.favouriteFood.push(grass.constructor);
  }
};
