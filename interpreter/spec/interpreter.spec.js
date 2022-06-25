'use strict'

describe("CHIP-8 Interpreter", function() {
    it("can step", function() {
      const result = step()
      expect(result).toBe(false);
    });
  });