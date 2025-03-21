# Testing Practice

This project is a simple JavaScript testing practice using **Jest**. It includes multiple utility functions and their corresponding tests following the **Test-Driven Development (TDD)** approach.

## Features
- **capitalize**: Capitalizes the first letter of a given string.
- **reverseString**: Reverses a given string.
- **calculator**: Supports basic arithmetic operations (add, subtract, multiply, divide).
- **caesarCipher**: Encrypts text using the Caesar cipher technique.
- **analyzeArray**: Analyzes an array and returns an object with its average, min, max, and length.

## Installation

### Prerequisites
Ensure that you have **Node.js** installed. If not, install it from [Node.js Official Website](https://nodejs.org/).

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mkatfi/Testing-Practice
   cd Testing-Practice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Tests
To run the test suite, execute:
```bash
npm test
```

## Project Structure
```
.
├── functions.js         # JavaScript functions to be tested
├── functions.test.js    # Jest test cases
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Troubleshooting

### "Cannot use import statement outside a module"
If you're using **ES6 imports (`import/export`)** and Jest fails, try one of these fixes:
- **Use CommonJS (`require/module.exports`)** instead.
- **Enable ES modules** by adding `"type": "module"` in `package.json`.


