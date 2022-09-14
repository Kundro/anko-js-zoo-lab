const { Employee } = require('../../../src/Entities/Employees/Employee');

test('Should not be able to create Employees', () => {
  try {
    expect(new Employee('test', 'test')).toThrow(Error);
  } catch (e) {
    expect(e.message).toBe('You cannot create an instance of Abstract Class.');
  }
});
