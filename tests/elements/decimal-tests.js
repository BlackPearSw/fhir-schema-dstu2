var fhir = require('../../lib');

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.decimal', function () {
    var schema = fhir.schema.decimal;

    it('validates decimal (1)', function () {
        var data = 1;

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('validates decimal (12.76)', function () {
        var data = 12.76;

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('validates decimal (32768)', function () {
        var data = 32768;

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid decimal (fubar)', function () {
        var data = 'fubar';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});