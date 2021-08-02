let assert = require('chai').assert;
const ipValidation = require('./ip-validation');

describe("Sample tests", () => {
  it('Pass if 100.150.200.250 is valid', () => {
    assert.equal(ipValidation.isValidIP("100.150.200.250"), true);
  })
  it('Pass if 0.0.0.0 is valid', () => {
    assert.equal(ipValidation.isValidIP("0.0.0.0"), true);
  })
  it('Pass if 12.255.56.1 is valid', () => {
    assert.equal(ipValidation.isValidIP("12.255.56.1"), true);
  })
  it('Pass if abc.def.ghi.jkl is invalid', () => {
    assert.equal(ipValidation.isValidIP("abc.def.ghi.jkl"), false);
  })
  it('Pass if 123.456.789.0 is invalid', () => {
    assert.equal(ipValidation.isValidIP("123.456.789.0"), false);
  })
  it('Pass if 1e0.1e1.1e2.2e2 is invalid', () => {
    assert.equal(ipValidation.isValidIP("1e0.1e1.1e2.2e2"), false);
  })
  it('Pass if linechange + 1.2.3.4 is invalid', () => {
    assert.equal(ipValidation.isValidIP("\n1.2.3.4"), false);
  })
  it('Pass if 01.02.03.04 is invalid', () => {
    assert.equal(ipValidation.isValidIP("01.02.03.04"), false);
  })
  it('Pass if 12.34.56 is invalid', () => {
    assert.equal(ipValidation.isValidIP("12.34.56"), false);
  })
  it('Pass if 12.34.56.-7 is invalid', () => {
    assert.equal(ipValidation.isValidIP("12.34.56.-7"), false);
  })
  it('Pass if empty string is invalid', () => {
    assert.equal(ipValidation.isValidIP(""), false);
  })
  it('Pass if 1.2.3.4 + empty space is invalid', () => {
    assert.equal(ipValidation.isValidIP("1.2.3.4 "), false);
  })
  it('Pass if 123,45,67,89 is invalid', () => {
    assert.equal(ipValidation.isValidIP("123,45,67,89"), false);
  })
  it('Pass if 1.2.3.4.5 is invalid', () => {
    assert.equal(ipValidation.isValidIP("1.2.3.4.5"), false);
  })
  it('Pass if 00.00.00.00 is invalid', () => {
    assert.equal(ipValidation.isValidIP("00.00.00.00"), false);
  })
  it('Pass if 000.000.000.000 is invalid', () => {
    assert.equal(ipValidation.isValidIP("000.000.000.000"), false);
  })
  it('Pass if 120.0.100.100 is valid', () => {
    assert.equal(ipValidation.isValidIP("120.0.100.100"), true);
  })
  it('Pass if 236.48 .227.242 is valid', () => {
    assert.equal(ipValidation.isValidIP("236.48 .227.242"), false);
  })
  it('Pass if 199.121..147 is valid', () => {
    assert.equal(ipValidation.isValidIP("199.121..147"), false);
  })
  it('Pass if 49.132.171. is valid', () => {
    assert.equal(ipValidation.isValidIP("49.132.171."), false);
  })
});

