var code = require('../../lib/index').elements.code;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.code', function () {
    var schema = code();

    it('validates code', function () {
        var data = 'va1id';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid code', function () {
        var data = ' !£$';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });

    it('validates code from ValueSet', function () {
        var schema = code({codes: ['foo', 'bar']});

        var data = 'foo';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('validates code from outside ValueSet', function () {
        var schema = code({codes: ['foo', 'bar']});

        var data = 'fubar';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});