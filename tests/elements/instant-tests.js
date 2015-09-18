var fhir = require('../../lib');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.instant', function () {
    var schema = fhir.schema.instant;

    it('validates a instant', function () {

        var data = '1974-06-15';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });
});