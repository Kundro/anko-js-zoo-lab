const Bird = require('./Bird');

module.exports.Parrot = class Parrot extends Bird {
  constructor() {
    super();
    this.friends = ['Parrot', 'Bison', 'Elephant', 'Turtle'];
    this.requiredSpaceSqFt = 5;
  }
};
