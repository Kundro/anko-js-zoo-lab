module.exports.ZooApp = class ZooApp {
  constructor(name) {
    this._zoos = [];
    this.name = name;
    console.log(`Created Zoo App ${this.name}.`);
  }
  AddZoo(zoo) {
    this._zoos.push(zoo);
    console.log(`Zoo from ${zoo.location} added to ${this.name} Zoo App.`);
  }
};
