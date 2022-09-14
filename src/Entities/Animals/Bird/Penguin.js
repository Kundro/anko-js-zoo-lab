const { Meet } = require('../../FoodTypes/Meet');
const { Bird } = require('./Bird');

module.exports.Penguin = class Penguin extends Bird {
  constructor() {
    super();
    this.friends = ['Penguin'];
    this.requiredSpaceSqFt = 10;
    let meet = new Meet();
    this.favouriteFood.push(meet.constructor);
  }
};
