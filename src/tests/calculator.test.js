const { compute, isNumber } = require('../calculator-lib');

describe('Calculator library', () => {
  test('addition: 2 + 3 = 5 (symbol)', () => {
    expect(compute('+', 2, 3)).toBe(5);
  });

  test('addition: add 2 + 3 = 5 (word)', () => {
    expect(compute('add', 2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(compute('-', 10, 4)).toBe(6);
    expect(compute('sub', 10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(compute('*', 45, 2)).toBe(90);
    expect(compute('mul', 45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(compute('/', 20, 5)).toBe(4);
    expect(compute('div', 20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => compute('/', 1, 0)).toThrow('Division by zero');
    expect(() => compute('div', 1, 0)).toThrow('Division by zero');
  });

  test('isNumber validation', () => {
    expect(isNumber('3')).toBe(true);
    expect(isNumber(4)).toBe(true);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  test('unknown operation throws', () => {
    expect(() => compute('pow', 2, 3)).toThrow('Unknown operation');
  });
});
