const { ZooApp } = require('./src/ZooApp');
const { Zoo } = require('./src/Entities/Zoo');
const { Lion } = require('./src/Entities/Animals/Mammal/Lion');
const { Parrot } = require('./src/Entities/Animals/Bird/Parrot');
const { Penguin } = require('./src/Entities/Animals/Bird/Penguin');
const { ZooKeeper } = require('./src/Entities/Employees/ZooKeeper');
const { Veterinarian } = require('./src/Entities/Employees/Veterinarian');
const { Enclosure } = require('./src/Entities/Enclosure');

let zooApp = new ZooApp('zooApp1');
let zoo1 = new Zoo('location1');
let zoo2 = new Zoo('location2');
zooApp.AddZoo(zoo1);
zooApp.AddZoo(zoo2);

let enclosure1 = new Enclosure('Lions', 4500);
let enclosure2 = new Enclosure('Birds', 25);

zoo1.AddEnclosure(enclosure1);
zoo1.AddEnclosure(enclosure2);

let lion1 = new Lion();
let lion2 = new Lion();
let lion3 = new Lion();
let lion4 = new Lion();

zoo1.AddAnimal(lion1);
zoo1.AddAnimal(lion2);
zoo1.AddAnimal(lion3);
zoo1.AddAnimal(lion4);

let zookeeper1 = new ZooKeeper('name1', 'surname1');
let veterinarian1 = new Veterinarian('name2', 'surname2');
let zookeeper2 = new ZooKeeper('name3', 'surname3');
let veterinarian2 = new Veterinarian('name4', 'surname4');

zookeeper1.AddAnimalExperience(new Lion());
veterinarian1.AddAnimalExperience(new Lion());
zookeeper2.AddAnimalExperience(new Parrot());
veterinarian2.AddAnimalExperience(new Penguin());

zoo1.HireEmployee(zookeeper1);
zoo1.HireEmployee(zookeeper2);
zoo1.HireEmployee(veterinarian1);
zoo1.HireEmployee(veterinarian2);

zoo1.FeedAnimals();
zoo1.HealAnimals();
