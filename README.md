# sky-one-9008a-test

Synthetic practice repository for the Sky Engineering Factory pilot. It contains no customer code and no secrets.
Run the tests with `npm test` (Node 22, no dependencies).

## Calculator functions

Defined in `src/calculator.js` as named ES module exports.

- `add(a, b)`: `add(2, 3) // 5`
- `subtract(a, b)`: `subtract(10, 4) // 6`
- `multiply(a, b)`: `multiply(3, 4) // 12`
- `divide(a, b)`: `divide(10, 2) // 5` (throws `Error('Division by zero')` when `b` is 0)
