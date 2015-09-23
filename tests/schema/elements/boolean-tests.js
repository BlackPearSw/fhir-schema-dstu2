var fhir = require('../../../lib');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.boolean', function () {
    var schema = fhir.schema.boolean;

    it('validates a boolean (true)', function () {
        var data = true;

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('validates a boolean (false)', function () {
        var data = false;

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid boolean', function () {
        var data = 'fubar';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});