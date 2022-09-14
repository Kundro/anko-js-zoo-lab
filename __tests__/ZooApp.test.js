const { Zoo } = require('../src/Entities/Zoo');
const { ZooApp } = require('../src/ZooApp');

describe('Should be able to create ZooApp', () => {
  test('Should be able to create ZooApp', () => {
    const zooApp = new ZooApp("ZooApp1");
    expect(zooApp).not.toBe(null);
  });
  test('Should be able to create Zoo', ()=>{
    const zoo = new Zoo("testLocation1");
    expect(zoo).not.toBe(null);
  });
  test('Should be able to add Zoo', ()=>{
    const zooApp = new ZooApp("ZooApp2");
    const zoo = new Zoo("testLocation2");
    zooApp.AddZoo(zoo);
    expect(zooApp._zoos[0].location).toBe("testLocation2");
  });
  test('Should be able to create Zoo with location name', ()=>{
    const zoo = new Zoo("testLocation3");
    expect(zoo.location).toBe("testLocation3");
  });
});
