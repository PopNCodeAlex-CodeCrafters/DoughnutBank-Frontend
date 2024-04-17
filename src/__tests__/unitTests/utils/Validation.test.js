import validationUtil from '../../../utils/Validation';

it.each([
  ['ALEX99_POP@yahoo.com', true],
  ['alex99_pop@yahoo.com', true],
  ['alex99_popahoo.com', false],
  ['alex99_pop@yahoo', false],
  ['alex99_pop@yahoo.ro', true]
])('email validator works properly', (email, isValid) => {
  const result = validationUtil.validateEmail(email);
  expect(result).toBe(isValid);
});

it.each([
  ['duios', false],
  ['mama', false],
  ['mamamamamamama', false],
  ['12345678a', true],
  ['mamamamamamama3', true]
])('password validator works properly', (pass, isValid) => {
  const result = validationUtil.validatePassword(pass);
  expect(result).toBe(isValid);
});
