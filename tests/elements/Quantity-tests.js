var fhir = require('../../lib');
var Validator = require('../../lib').Validator;
var formats = require('../../lib').formats;

var expect = require('chai').expect;

describe('elements.Quantity', function () {
    var schema = fhir.schema.Quantity;
    var validator = new Validator(fhir.schema, fhir.formats);
    var data;

    beforeEach(function(){
        data = {
            value: 12.76,
            comparator: '<',
            unit: 'cm',
            system: 'http://health.org/measurement',
            code: 'hi'
        };
    });

    it('validates Quantity', function () {
        var result = validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid Quantity', function () {
        var data = ' !£$';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects when comparator invalid', function () {
        data.comparator = ' !£$';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});