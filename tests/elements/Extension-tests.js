var Extension = require('../../lib/index').elements.Extension;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('elements.Extension', function () {

    var schema = Extension();
    var validator = new Validator(schema, formats);
    var data;

    beforeEach(function(){
        data = {
            url: 'http://foo.bar/x'
        };
    });

    it('validates an Extension', function () {
        var result = validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueInteger', function () {
        data.valueInteger = 1;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDecimal', function () {
        data.valueDecimal = 1.5;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDateTime', function () {
        data.valueDateTime = '2015-10-01T15:00:00';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDate', function () {
        data.valueDate = '2015-10-01';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueInstant', function () {
        data.valueInstant = '2015-10-01T15:00:00:000Z';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueString', function () {
        data.valueString = 'The quick brown fox etc';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueUri', function () {
        data.valueUri = 'http://health.org/ext';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueBoolean', function () {
        data.valueBoolean = true;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueCode', function () {
        data.valueCode = 'ok';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueMarkdown', function () {
        data.valueMarkdown = 'ok';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueBase64Binary', function () {
        data.valueBase64Binary = 'ABCDEF01234567890';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });


    it('validates an Extension with valueCoding', function () {
        data.valueCoding = {
            code: 'ok'
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueCodeableConcept', function () {
        data.valueCodeableConcept = {
            coding: [
                {
                    code: 'ok'
                }
            ]
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with extension', function () {
        data.extension = [{
            url: 'http://health.org/ext/ext'
        }];

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an Extension when url missing', function () {
        delete data.url;

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Extension with more than one value[x]', function () {
        data.valueInteger = 1;
        data.valueCode = 'ok';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});