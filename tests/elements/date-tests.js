var fhir = require('../../lib');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.date', function () {
    var schema = fhir.schema.date;

    it('validates a date', function () {

        var data = '1974-06-15';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid date', function () {
        var data = '1974d-06-15';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});