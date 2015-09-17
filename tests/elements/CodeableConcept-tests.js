var Validator = require('../../lib/').Validator;
var fhir = require('../../lib/');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.CodeableConcept', function () {

    var schema = fhir.schema.CodeableConcept;
    var validator;

    before(function () {
        validator = new Validator(fhir.schema, fhir.formats);
    });

    it('validates a CodeableConcept', function () {

        var data = {
            coding: [{
                system: 'http://foo.bar',
                code: 'fubar'
            }]
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid CodeableConcept', function () {
        var data = {
            coding: {
                system: 'http://foo.bar',
                code: 'fubar'
            }
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});