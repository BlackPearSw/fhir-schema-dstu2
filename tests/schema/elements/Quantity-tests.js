var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('elements.Quantity', function () {
    var schema = fhir.schema.Quantity;
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
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid Quantity', function () {
        var data = ' !£$';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects when comparator invalid', function () {
        data.comparator = ' !£$';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});