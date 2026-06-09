// Calculator library used by the CLI and tests
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/)

function isNumber(s) {
  return !Number.isNaN(Number(s));
}

function compute(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return a + b;
    case 'sub':
    case '-':
      return a - b;
    case 'mul':
    case '*':
      return a * b;
    case 'div':
    case '/':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    default:
      throw new Error('Unknown operation');
  }
}

module.exports = { isNumber, compute };
