const { FeedTime } = require('../FoodTypes/FeedTime');

module.exports.Animal = class Animal {
  constructor() {
    this.feedTimes = [];
    this.feedSchedule = [];
    this.friends = [];
    this.requiredSpaceSqFt;
    this.favouriteFood = [];
    this.isSick = false;
    if (this.constructor === Animal) {
      throw new Error('You cannot create an instance of Abstract Class.');
    }
  }
  IsFriendlyWith(animal) {
    if (this.friends.includes(animal.constructor.name)) {
      return true;
    } else return false;
  }
  Feed(food, zooKeeper) {
    let feedTime = new FeedTime().feedTime;
    if (this.favouriteFood.includes(food.constructor)) {
      this.feedTimes.push(feedTime);
      console.log(
        `${feedTime} zoo keeper ${zooKeeper.firstName} ${zooKeeper.lastName} fed the ${this.constructor.name}`,
      );
    } else {
      console.log(
        `${this.constructor.name} doesn't eat ${food.constructor.name}`,
      );
    }
  }
  IsSick() {
    return this.isSick;
  }
  AddFeedSchedule(hours) {
    this.feedSchedule.push(hours);
  }
  Heal(medicine) {
    let medicineTypes = ['Antibiotics', 'AntiDepression', 'AntiInflammatory'];
    if (
      medicineTypes.includes(medicine.constructor.name) &&
      this.isSick == true
    ) {
      this.isSick = false;
    } else if (this.isSick == false) {
      throw new Error(`${this.constructor.name} doesn't sick`);
    }
  }
};
