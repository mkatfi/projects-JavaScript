// functions.test.js
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');

test('capitalize first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('calculator operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.divide(5, 0)).toBe('Error: Division by zero');
});

test('caesar cipher shifts correctly', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('Hello', 3)).toBe('Khoor');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
