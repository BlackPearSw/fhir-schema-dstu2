var fhir = require('../../lib/');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.code', function () {
    var schema = fhir.schema.code;

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
});