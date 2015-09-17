var fhir = require('../../lib');
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('elements.Ratio', function () {
    var schema = fhir.schema.Ratio;
    var validator = new Validator(fhir.schema, fhir.formats);
    var data;

    beforeEach(function(){
       data = {
           numerator: {
               value: 3
           },
           denominator: {
               value: 4
           }
       }
    });

    it('validates Ratio', function () {
        var result = validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('validates a Ratio with no numerator, denominator having some extension', function () {
        delete data.numerator;
        delete data.denominator;

        data.extension = [];

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects a Ratio with numerator only', function () {
        delete data.denominator;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Ratio with denominator only', function () {
        delete data.numerator;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Ratio with no numerator, denominator or extension', function () {
        delete data.numerator;
        delete data.denominator;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});