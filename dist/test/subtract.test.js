const subtract = (a, b) => a - b;

test('subtracts 9 - 2 to equal 7', () => {
  expect(subtract(9, 2)).toBe(7);
});