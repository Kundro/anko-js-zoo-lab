const Bird = require('./Bird');

module.exports.Penguin = class Penguin extends Bird {
  constructor() {
    super();
    this.friends = ['Penguin'];
    this.requiredSpaceSqFt = 10;
  }
};