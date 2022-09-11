const Reptile = require('./Reptile');

module.exports.Snake = class Snake extends Reptile {
  constructor() {
    super();
    this.friends = ['Snake'];
    this.requiredSpaceSqFt = 2;
  }
};