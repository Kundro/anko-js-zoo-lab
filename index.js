const ZooApp = require('./src/ZooApp');
const Zoo = require('./src/Entities/Zoo');
const Lion = require('./src/Entities/Animals/Mammal/Lion');

let zooApp = new ZooApp();
let zoo1 = new Zoo("location1");
let zoo2 = new Zoo("location2");
zooApp.AddZoo(zoo1);
zooApp.AddZoo(zoo2);

zoo1.AddEnclosure("Lions", 4500);
zoo1.AddEnclosure("Birds", 25);

let lion1 = new Lion();
let lion2 = new Lion();
let lion3 = new Lion();
let lion4 = new Lion();

zoo1.AddAnimal(lion1);
zoo1.AddAnimal(lion2);
zoo1.AddAnimal(lion3);
zoo1.AddAnimal(lion4);
