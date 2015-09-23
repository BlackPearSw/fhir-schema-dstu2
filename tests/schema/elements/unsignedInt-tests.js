var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('elements.unsignedInt', function () {
    var schema = fhir.schema.unsignedInt;

    it('validates unsignedInt (1)', function () {
        var data = 1;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates unsignedInt (32768)', function () {
        var data = 32768;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates unsignedInt (0)', function () {
        var data = 0;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid unsignedInt (-1)', function () {
        var data = -1;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an invalid unsignedInt (fubar)', function () {
        var data = 'fubar';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});