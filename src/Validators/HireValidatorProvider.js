const {
  VeterinarianHireValidator,
} = require('../Validators/VeterinarianHireValidator');
const { ZooKeeperHireValidator } = require('./ZooKeeperHireValidator');

module.exports.HireValidatorProvider = class HireValidatorProvider {
  constructor() {}
  GetHireValidator(employee) {
    if (employee.constructor.name == 'ZooKeeper') {
      return new ZooKeeperHireValidator();
    } else if (employee.constructor.name == 'Veterinarian') {
      return new VeterinarianHireValidator();
    } else
      throw new Error(
        `For ${employee.constructor.name} class no available validators.`,
      );
  }
};
