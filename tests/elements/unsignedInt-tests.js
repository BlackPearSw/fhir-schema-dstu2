var unsignedInt = require('../../lib/index').elements.unsignedInt;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.unsignedInt', function () {
    var schema = {
        type: 'object',
        properties: {
            value: unsignedInt()
        }
    };

    it('validates unsignedInt (1)', function () {
        var data = {
            value: 1
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('validates unsignedInt (32768)', function () {
        var data = {
            value: 32768
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid unsignedInt (0)', function () {
        var data = {
            value: 0
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });

    it('rejects an invalid unsignedInt (-1)', function () {
        var data = {
            value: -1
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });

    it('rejects an invalid unsignedInt (fubar)', function () {
        var data = {
            value: 'fubar'
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});