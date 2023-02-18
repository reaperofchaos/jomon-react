import {
  containsNumbers,
  containsSpecialChar,
  containsUpperCase,
  passwordIsNotTooShort,
  passwordIsSecure
} from '../password-validation.helpers';

describe('password-validation tests', () => {
  test('containsNumbers', () => {
    const password = 'test';
    const passwordWithNumber = 'test1';

    expect(containsNumbers(password)).toBe(false);
    expect(containsNumbers(passwordWithNumber)).toBe(true);
  });
  test('containsUpperCase', () => {
    const password = 'test';
    const passwordWithUpperCase = 'Test';

    expect(containsUpperCase(password)).toBe(false);
    expect(containsUpperCase(passwordWithUpperCase)).toBe(true);
  });
  test('containsSpecialCharacter', () => {
    const password = 'test';
    const passwordWithSymbol = 'test!';

    expect(containsSpecialChar(password)).toBe(false);
    expect(containsSpecialChar(passwordWithSymbol)).toBe(true);
  });
  test('passwordIsNotTooShort', () => {
    const shortPassword = 'test';
    const password = 'test123';

    expect(passwordIsNotTooShort(shortPassword)).toBe(false);
    expect(passwordIsNotTooShort(password)).toBe(true);
  });
  test('passwordIsSecure', () => {
    const validPassword = 'Test123!';
    const validPassword2 = '!23teSt1';
    const passwordWithSymbol = 'testABC!';
    const passwordWithUpperCase = 'TestABC';
    const shortPassword = 'test';
    const passwordWithNumber = 'testABC1';

    expect(passwordIsSecure(validPassword)).toBe(true);
    expect(passwordIsSecure(validPassword2)).toBe(true);
    expect(passwordIsSecure(passwordWithSymbol)).toBe(false);
    expect(passwordIsSecure(passwordWithUpperCase)).toBe(false);
    expect(passwordIsSecure(shortPassword)).toBe(false);
    expect(passwordIsSecure(passwordWithNumber)).toBe(false);
  });
});
