#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/), modulo (%), power (pow, ^, **), square root (sqrt)
// This implementation follows the instructions in the latest issue:
// https://github.com/sferg82/skills-create-applications-with-the-copilot-cli/issues/4

const { isNumber, compute } = require('./calculator-lib');

const args = process.argv.slice(2);
const usage = `Usage:
  node src/calculator.js <operation> <num1> <num2?>
Operations:
  add | +        addition
  sub | -        subtraction
  mul | *        multiplication
  div | /        division
  mod | %        modulo
  pow | ^ | **   exponentiation
  sqrt           square root (unary)
Examples:
  node src/calculator.js add 2 3
  node src/calculator.js + 4 5
  node src/calculator.js mod 10 3
  node src/calculator.js pow 2 8
  node src/calculator.js sqrt 16
`;

if (args.length === 0) {
  console.log(usage);
  process.exit(0);
}

let op = args[0];
if (op && op.startsWith('--')) {
  op = op.slice(2);
}

if (op === 'sqrt') {
  const nStr = args[1];
  if (!nStr) {
    console.error('Error: one numeric argument is required for sqrt.');
    console.log(usage);
    process.exit(1);
  }
  if (!isNumber(nStr)) {
    console.error('Error: argument must be a number.');
    process.exit(1);
  }
  const n = Number(nStr);
  try {
    const result = compute('sqrt', n);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
  process.exit(0);
}

// binary operations
const n1 = args[1];
const n2 = args[2];

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
