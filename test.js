var assert = require('assert');
describe("+", () => {
    it("returns the sum of two numbers", () => {
        //setup
        const num1 = 2;
        const num2 = 4;
        const expected = 6;

        //exercise
        const result = num1 + num2;

        //verify
        assert.equal(result, expected);
    })
})