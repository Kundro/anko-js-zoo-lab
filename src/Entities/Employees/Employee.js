module.exports.Employee = class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (this.constructor === Employee) {
      throw new Error('You cannot create an instance of Abstract Class.');
    }
  }
};
