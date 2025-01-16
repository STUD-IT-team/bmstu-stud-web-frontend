import '@types/jest';

import Validators from '~/utils/validators';


describe('Validating emails. Positive', () => {
  it('Lowercase', () => {
    expect(Validators.email.validate('lowercase@mail.ru')).toBeTruthy();
  });
  it('Uppercase', () => {
    expect(Validators.email.validate('UPPERCASE@MAIL.RU')).toBeTruthy();
  });
  it('Mixed cases', () => {
    expect(Validators.email.validate('MiXedCases@MAIl.rU')).toBeTruthy();
  });
  it('Short email', () => {
    expect(Validators.email.validate('a@b.cd')).toBeTruthy();
  });
  it('Long email', () => {
    expect(
      Validators.email.validate(
        'verylongemailverylongemailverylongemailverylongemailverylongemailverylongemailverylongemailverylongemailverylongemail@verylongemailverylongemailverylongemailverylongemailverylongemail.verylongemailverylongemailverylongemailverylongemailverylongemailverylongemail',
      ),
    ).toBeTruthy();
  });
  it('Dot email', () => {
    expect(Validators.email.validate('some.email.dotted@gmail.com')).toBeTruthy();
  });
});

describe('Validating emails. Negative', () => {
  it('Spaces 1', () => {
    expect(Validators.email.validate('some email@mail.ru')).toBeFalsy();
  });
  it('Spaces 2', () => {
    expect(Validators.email.validate('someemail@ma il.ru')).toBeFalsy();
  });
  it('Spaces 3', () => {
    expect(Validators.email.validate('someemail@mail.r u')).toBeFalsy();
  });
  it('Not allowed symbols', () => {
    expect(Validators.email.validate('some`symbol@mail.ru')).toBeFalsy();
  });
  it('No part 1', () => {
    expect(Validators.email.validate('@mail.ru')).toBeFalsy();
  });
  it('No part 2', () => {
    expect(Validators.email.validate('someemail@.ru')).toBeFalsy();
  });
  it('No part 3', () => {
    expect(Validators.email.validate('someemail@mail.')).toBeFalsy();
  });
});
