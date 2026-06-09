const { compute, isNumber, modulo, power, squareRoot } = require('../calculator-lib');

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

  test('modulo: 10 % 3 = 1', () => {
    expect(compute('%', 10, 3)).toBe(1);
    expect(compute('mod', 10, 3)).toBe(1);
    expect(modulo(10,3)).toBe(1);
  });

  test('modulo: 5 % 2 = 1 (image example)', () => {
    expect(compute('%', 5, 2)).toBe(1);
    expect(compute('mod', 5, 2)).toBe(1);
    expect(modulo(5,2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => compute('%', 1, 0)).toThrow('Modulo by zero');
    expect(() => modulo(1,0)).toThrow('Modulo by zero');
  });

  test('power: 2 ^ 8 = 256', () => {
    expect(compute('pow', 2, 8)).toBe(256);
    expect(compute('^', 2, 8)).toBe(256);
    expect(compute('**', 2, 8)).toBe(256);
    expect(power(2,8)).toBe(256);
  });

  test('power: 2 ^ 3 = 8 (image example)', () => {
    expect(compute('pow', 2, 3)).toBe(8);
    expect(compute('^', 2, 3)).toBe(8);
    expect(power(2,3)).toBe(8);
  });

  test('square root: sqrt(16) = 4', () => {
    expect(compute('sqrt', 16)).toBe(4);
    expect(squareRoot(16)).toBe(4);
  });

  test('square root with symbol example (√16) => 4', () => {
    expect(compute('sqrt', 16)).toBe(4);
  });

  test('square root of negative throws', () => {
    expect(() => compute('sqrt', -4)).toThrow('Square root of negative number');
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });

  test('isNumber validation', () => {
    expect(isNumber('3')).toBe(true);
    expect(isNumber(4)).toBe(true);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  test('unknown operation throws', () => {
    expect(() => compute('pow2', 2, 3)).toThrow('Unknown operation');
  });
});
