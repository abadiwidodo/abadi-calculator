var expect = require('chai').expect;
var calculator = require('../src/calculator');

describe('Calculator', function () {
    it('Calculator should add correctly', function () {
        expect(calculator.add(1, 1)).to.equal(2);
        expect(calculator.add(2, 2)).to.equal(4);
        expect(calculator.add(10, 10)).to.equal(20);
    });

    it('Calculator should substract correctly', function () {
        expect(calculator.substract(1, 1)).to.equal(0);
        expect(calculator.substract(2, 1)).to.equal(1);
        expect(calculator.substract(10, 5)).to.equal(5);
    });

    it('Calculator should multiply correctly', function () {
        expect(calculator.multiply(1, 1)).to.equal(1);
        expect(calculator.multiply(2, 2)).to.equal(4);
        expect(calculator.multiply(1, 5)).to.equal(5);
    });

    it('Calculator should divide correctly', function () {
        expect(calculator.divide(1, 1)).to.equal(1);
        expect(calculator.divide(20, 2)).to.equal(10);
        expect(calculator.divide(10, 2)).to.equal(5);
    });
});