var string = require('../../lib/index').elements.string;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.string', function () {
    var schema = string();

    it('validates a string', function () {

        var data = 'The quick brown fox jumped over the lazy dog';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid string', function () {
        var data = {
            value: 99
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});