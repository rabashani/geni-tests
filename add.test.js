const add = require('./add');

describe("add", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
      });
      
      test('adds a + b to equal ab', () => {
          expect(add("a", "b")).toBe("invalid input");
      });
})
