const Mammal = require('./Mammal');

module.exports.Bison = class Bison extends Mammal {
  constructor() {
    super();
    this.friends = ['Elephant'];
    this.requiredSpaceSqFt = 1000;
  }
};