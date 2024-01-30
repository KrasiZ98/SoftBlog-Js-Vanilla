const { expect } = require('chai');
const numberOperations = require('./demo');

describe("Testing", () => {
    describe("powNumber", () => {
        it("the function returns the power of the given number", () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });

    describe("numberChecker", () => {
        it('the function parses the input to number, and validates it', () => {
            expect(numberOperations.numberChecker('100')).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker('99')).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker('140')).to.equal("The number is greater or equal to 100!");
            // expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
            // expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
            // expect(numberOperations.numberChecker(140)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker('9')).to.equal("The number is lower than 100!");
            // expect(numberOperations.numberChecker(9)).to.equal("The number is lower than 100!");
        });

        it('If the input is not a number the function throws an error', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker()).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
           
        });
    });

    describe("sumArrays", () => {
        it("sum array", () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1, 2], [1, 2])).to.deep.equal([2, 4]);
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
        });
    });
});