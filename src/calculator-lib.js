// Calculator library used by the CLI and tests
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/), modulo (%), power (pow, ^, **), square root (sqrt)

function isNumber(s) {
  return !Number.isNaN(Number(s));
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
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
    case 'mod':
    case '%':
      return modulo(a, b);
    case 'pow':
    case '^':
    case '**':
      return power(a, b);
    case 'sqrt':
      // unary: use 'a' and ignore b
      return squareRoot(a);
    default:
      throw new Error('Unknown operation');
  }
}

module.exports = { isNumber, compute, modulo, power, squareRoot };
