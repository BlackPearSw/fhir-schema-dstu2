var instant = require('../../lib/index').elements.instant;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.instant', function () {
    var schema = instant();

    it('validates a instant', function () {

        var data = '1974-06-15';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });
});