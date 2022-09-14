const { Animal } = require('../../../src/Entities/Animals/Animal');
const { Parrot } = require('../../../src/Entities/Animals/Bird/Parrot');
const { Lion } = require('../../../src/Entities/Animals/Mammal/Lion');
const { ZooKeeper } = require('../../../src/Entities/Employees/ZooKeeper');
const { FeedTime } = require('../../../src/Entities/FoodTypes/FeedTime');
const { Meet } = require('../../../src/Entities/FoodTypes/Meet');
const { Grass } = require('../../../src/Entities/FoodTypes/Grass');
const {
  Antibiotics,
} = require('../../../src/Entities/MedicineTypes/Antibiotics');

describe('Should be able to create Animal', () => {
  test('Should not be able to create Animal', () => {
    try {
      expect(new Animal()).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe(
        'You cannot create an instance of Abstract Class.',
      );
    }
  });
  test('Should be able to know friends', () => {
    let lion1 = new Lion();
    let lion2 = new Lion();
    let parrot = new Parrot();
    expect(lion1.IsFriendlyWith(lion2)).toBe(true);
    expect(lion1.IsFriendlyWith(parrot)).toBe(false);
  });
  test('Should be able to feed animals', () => {
    let zooKeeper = new ZooKeeper('name', 'surname');
    let lion1 = new Lion();
    let meet = new Meet();
    lion1.Feed(meet, zooKeeper);
    let feedTime = new FeedTime().feedTime;
    expect(lion1.favouriteFood.includes(meet.constructor)).toBe(true);
    expect(lion1.feedTimes?.includes(feedTime)).toBe(true);
  });
  test('Should not be able to feed animals', () => {
    let zooKeeper = new ZooKeeper('name', 'surname');
    let lion1 = new Lion();
    let grass = new Grass();
    lion1.Feed(grass, zooKeeper);
    let feedTime = new FeedTime().feedTime;
    expect(lion1.favouriteFood.includes(grass.constructor)).toBe(false);
    expect(lion1.feedTimes?.includes(feedTime)).toBe(false);
  });
  test('Should be able to check sick status', () => {
    let lion1 = new Lion();
    let lion2 = new Lion();
    lion2.isSick = true;
    let lion3 = new Lion();
    let lion4 = new Lion();
    expect(lion1.IsSick()).toBe(false);
    expect(lion2.IsSick()).toBe(true);
    expect(lion3.IsSick()).toBe(false);
    expect(lion4.IsSick()).toBe(false);
  });
  test('Should be able to create feed schedule', () => {
    let lion1 = new Lion();
    let hours = [2, 4, 6];
    lion1.AddFeedSchedule(hours);
    expect(lion1.feedSchedule.includes(hours)).toBe(true);
  });
  test('Should be able to heal animals', () => {
    let lion1 = new Lion();
    let antibiotics = new Antibiotics();
    lion1.isSick = true;
    lion1.Heal(antibiotics);
    expect(lion1.isSick).toBe(false);
  });
  test('Should not be able to heal animals', () => {
    let lion1 = new Lion();
    let antibiotics = new Antibiotics();
    lion1.isSick = false;

    expect(lion1.isSick).toBe(false);

    try {
      expect(lion1.Heal(antibiotics)).toThrow(Error);
    } catch (e) {
      expect(e.message).toBe(`${lion1.constructor.name} doesn't sick`);
    }
  });
});
