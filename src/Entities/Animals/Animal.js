module.exports.Animal = class Animal {
  constructor() {
    this.id = 0;
    this.id++;
    this.isSick = this.id % 3 == 0 ? true : false;
    this.feedTimes = [];
    this.feedSchedule = [];
    this.friends = [];
    this.requiredSpaceSqFt;
    this.favouriteFood;
    if (this.constructor === Animal) {
      throw new Error('You cannot create an instance of Abstract Class.');
    }
  }
  IsFriendlyWith(animal) {
    return this.friends.includes(animal);
  }
  Feed(food, zooKeeper) {}
  IsSick() {
     return this.isSick;
  }
  AddFeedSchedule(hours) {
    this.feedSchedule.push(hours);
  }
  Heal(medicine) {}
};
