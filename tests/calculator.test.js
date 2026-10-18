import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, multiply } from '../src/calculator.js';

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
