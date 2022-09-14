const { Lion } = require('../../src/Entities/Animals/Mammal/Lion');
const { Enclosure } = require('../../src/Entities/Enclosure');
const { Zoo } = require('../../src/Entities/Zoo');

describe('Should be able to create enclosure', () => {
  it('Should be able to create enclosure and have params', () => {
    const zoo = new Zoo('locationTest1');
    const enclosure = new Enclosure('enclosureTest1', 1500);
    zoo.AddEnclosure(enclosure);
    expect(enclosure.name).toBe('enclosureTest1');
    expect(enclosure.squareFeet).toBe(1500);
    expect(enclosure.parentZoo.location).toBe('locationTest1');
  });
  it('Should be able to add animal', () => {
    const zoo = new Zoo('locationTest2');
    const enclosure = new Enclosure('enclosureTest2', 1500);
    zoo.AddEnclosure(enclosure);
    const lion = new Lion();
    zoo.AddAnimal(lion);
    expect(enclosure.animals.includes("Lion")).toBe(true);
  });
});
