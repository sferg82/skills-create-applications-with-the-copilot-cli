# Create applications with the Copilot CLI

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey sferg82!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/sferg82/skills-create-applications-with-the-copilot-cli/issues/1)


## Calculator CLI

A simple Node.js CLI calculator was added in this repo (branch: create-calc-app).

Usage
- Run the CLI:
  - node src/calculator.js add 2 3
  - node src/calculator.js + 4 5

Examples (from provided image):
- 2 + 3 => 5
- 10 - 4 => 6
- 45 * 2 => 90
- 20 / 5 => 4

Testing
- Install dev dependencies (if needed): `npm install`
- Run tests: `npm test` (uses Jest)

Files
- src/calculator.js — CLI entry (commented with supported operations)
- src/calculator-lib.js — library with compute() and isNumber()
- src/tests/calculator.test.js — Jest tests covering operations and edge cases (division by zero)

Notes
- Division by zero throws an error with message: "Division by zero".

Reference
- Issue: https://github.com/sferg82/skills-create-applications-with-the-copilot-cli/issues/3
