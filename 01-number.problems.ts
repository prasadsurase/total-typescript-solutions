import { expect, it } from 'vitest';

export constant addTwoNumbers = (a: number, b: number) => {
  return a + b;
}

it("should add two numbers", () => {
  expect(addTwoNumbers(5,6).toEqual(11);
  expect(addTwoNumbers(10.5,10.5).toEqual(21);
});
