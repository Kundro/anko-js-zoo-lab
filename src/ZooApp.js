module.exports.ZooApp = class ZooApp {
  constructor() {
    this._zoos = [];
  }
  AddZoo(zoo) {
    this._zoos.push(zoo);
  }
};
