module.exports.Employee = class Employee{
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
        if (this.constructor === Employee) {
            throw new Error('You cannot create an instance of Abstract Class.');
          }
    }
}