/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Invalid expression: Division by zero.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  // Tokenize input expression and convert infix to postfix notation
  infixToPostfix(expression) {
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '(': 0,
    };

    const outputQueue = [];
    const operatorStack = [];
    const tokens = expression.match(/\d+(\.\d+)?|[-+*/()]/g); // Tokenize expression

    tokens.forEach(token => {
      if (!isNaN(token)) {
        outputQueue.push(token); // If it's a number, push it to the output
      } else if (token === '(') {
        operatorStack.push(token); // Push '(' to the stack
      } else if (token === ')') {
        while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop()); // Pop operators to output until '('
        }
        if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1] !== '(') {
          throw new Error("Invalid expression: Mismatched parentheses.");
        }
        operatorStack.pop(); // Remove '(' from stack
      } else {
        // Operator: pop operators with higher precedence
        while (
          operatorStack.length &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    });

    while (operatorStack.length) {
      const op = operatorStack.pop();
      if (op === '(') {
        throw new Error("Invalid expression: Mismatched parentheses.");
      }
      outputQueue.push(op);
    }

    return outputQueue;
  }

  // Evaluate postfix expression
  evaluatePostfix(postfix) {
    const stack = [];

    postfix.forEach(token => {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              throw new Error("Cannot divide a number by 0.");
            }
            stack.push(a / b);
            break;
          default:
            throw new Error("Invalid operator in expression.");
        }
      }
    });

    return stack[0]; // The final result will be the only element in the stack
  }

  // Calculate method that avoids using eval()
  calculate(inputExpression) {
    const temp = inputExpression;
    const cleanedExpression = temp.replace(/\s+/g, ''); // Remove spaces
    const isValidExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression); // Validate expression

    if (!isValidExpression) {
      throw new Error("Invalid expression.");
    }

    // Check for balanced parentheses
    const parenthesisStack = [];
    for (const char of cleanedExpression) {
      if (char === '(') {
        parenthesisStack.push(char);
      } else if (char === ')') {
        if (parenthesisStack.length === 0) {
          throw new Error("Invalid expression: Mismatched parentheses.");
        }
        parenthesisStack.pop();
      }
    }
    if (parenthesisStack.length > 0) {
      throw new Error("Invalid expression: Mismatched parentheses.");
    }

    const postfix = this.infixToPostfix(cleanedExpression); // Convert infix to postfix
    this.result = this.evaluatePostfix(postfix); // Evaluate the postfix expression

    return this.result;
  }
}


module.exports = Calculator;
