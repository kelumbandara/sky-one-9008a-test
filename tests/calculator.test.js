import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, multiply, subtract, divide } from '../src/calculator.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('multiply returns the product of two numbers', () => {
  assert.equal(multiply(3, 4), 12);
});

test('multiply handles negative numbers', () => {
  assert.equal(multiply(-3, 4), -12);
  assert.equal(multiply(-3, -4), 12);
});

test('subtract returns a minus b', () => {
  assert.equal(subtract(5, 3), 2);
});

test('divide returns a divided by b', () => {
  assert.equal(divide(8, 2), 4);
});

test('divide throws "Division by zero" when b is zero', () => {
  assert.throws(
    () => divide(1, 0),
    (err) => err instanceof Error && err.message === 'Division by zero'
  );
});
