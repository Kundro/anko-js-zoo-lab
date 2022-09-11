const Mammal = require('./Mammal');

module.exports.Lion = class Lion extends Mammal {
  constructor() {
    super();
    this.friends = ['Lion'];
    this.requiredSpaceSqFt = 1000;
  }
};
