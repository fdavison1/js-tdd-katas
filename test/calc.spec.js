const Calc = require('../src/calc');
var assert = require('assert');

describe('String calculator', () => {

    it('should return 0 when string is empty', () => {
        assert.equal(new Calc().add(""), 0);
    });
    it('given single number, return same number', () =>  {
        assert.equal(new Calc().add('5'), 5)
    })
    it('2 + 4 = 6', () =>  {
        assert.equal(new Calc().add('2,4'), 6)
    })
    it('multiple numbers', () =>  {
        assert.equal(new Calc().add('4,2,1'), 7)
    })
    it('no negatives', () =>  {
        assert.throws(() => new Calc().add('-1'), Error, 'negatives not allowed')
    })
});