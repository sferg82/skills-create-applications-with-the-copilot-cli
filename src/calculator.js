#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/)
// This implementation follows the instructions in the latest issue:
// https://github.com/sferg82/skills-create-applications-with-the-copilot-cli/issues/3

const [,, opOrFlag, aStr, bStr] = process.argv;
const usage = `Usage:
  node src/calculator.js <operation> <num1> <num2>
Operations:
  add | +        addition
  sub | -        subtraction
  mul | *        multiplication
  div | /        division
Examples:
  node src/calculator.js add 2 3
  node src/calculator.js + 4 5
`;

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

// If no args provided, print help
if (!opOrFlag) {
  console.log(usage);
  process.exit(0);
}

// Support a flag-like interface: --add 2 3 or positional: add 2 3
let op = opOrFlag;
let n1 = aStr;
let n2 = bStr;

// allow flags like --add
if (opOrFlag && opOrFlag.startsWith('--')) {
  op = opOrFlag.slice(2);
}

if (!n1 || !n2) {
  console.error('Error: two numeric arguments are required.');
  console.log(usage);
  process.exit(1);
}

if (!isNumber(n1) || !isNumber(n2)) {
  console.error('Error: arguments must be numbers.');
  process.exit(1);
}

const a = Number(n1);
const b = Number(n2);

try {
  const result = compute(op, a, b);
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
