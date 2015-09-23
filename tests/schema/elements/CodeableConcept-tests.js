var fhir = require('../../../lib/');
var expect = require('chai').expect;

describe('elements.CodeableConcept', function () {

    var schema = fhir.schema.CodeableConcept;

    it('validates a CodeableConcept', function () {

        var data = {
            coding: [{
                system: 'http://foo.bar',
                code: 'fubar'
            }]
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid CodeableConcept', function () {
        var data = {
            coding: {
                system: 'http://foo.bar',
                code: 'fubar'
            }
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});