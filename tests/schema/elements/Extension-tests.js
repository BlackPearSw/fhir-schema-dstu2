var fhir = require('../../../lib/');
var expect = require('chai').expect;

describe('elements.Extension', function () {

    var schema = fhir.schema.Extension;
    var data;

    beforeEach(function(){
        data = {
            url: 'http://foo.bar/x'
        };
    });

    it('validates an Extension', function () {
        data.valueBoolean = true;

        var result = fhir.validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueInteger', function () {
        data.valueInteger = 1;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDecimal', function () {
        data.valueDecimal = 1.5;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDateTime', function () {
        data.valueDateTime = '2015-10-01T15:00:00';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueDate', function () {
        data.valueDate = '2015-10-01';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueInstant', function () {
        data.valueInstant = '2015-10-01T15:00:00:000Z';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueString', function () {
        data.valueString = 'The quick brown fox etc';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueUri', function () {
        data.valueUri = 'http://health.org/ext';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueBoolean', function () {
        data.valueBoolean = true;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueCode', function () {
        data.valueCode = 'ok';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueMarkdown', function () {
        data.valueMarkdown = 'ok';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueBase64Binary', function () {
        data.valueBase64Binary = 'ABCDEF01234567890';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });


    it('validates an Extension with valueCoding', function () {
        data.valueCoding = {
            code: 'ok'
        };

        var result = fhir.validator.validate(data, schema);

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

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueAttachment', function () {
        data.valueAttachment = {};

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueIdentifier', function () {
        data.valueIdentifier = {};

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueQuantity', function () {
        data.valueQuantity = {};

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueRange', function () {
        data.valueRange = {};

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valuePeriod', function () {
        data.valuePeriod = {
            start: '2015',
            end: '2016'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueRatio', function () {
        data.valueRatio = {
            numerator : {
                value: 1
            },
            denominator: {
                value: 2
            }
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueHumanName', function () {
        data.valueHumanName = {
            family: ['Smith']
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueAddress', function () {
        data.valueAddress = {
            city: 'Somewhere'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueContactPoint', function () {
        data.valueContactPoint = {
            value: '+44 1234 567890'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueTiming', function () {
        data.valueTiming = {
            event: ['2015-04-12']
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueSignature', function () {
        data.valueSignature = {
            type: {
                code: 'digital'
            },
            when: '2015-04-12T17:34:23:004Z',
            whoUri: 'http://health.org/dr',
            contentType: 'application/xml',
            blob: 'ABCDEF01234567890'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with valueReference', function () {
        data.valueReference = {
            display: '2015-04-12'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates an Extension with extension', function () {
        data.extension = [{
            url: 'http://health.org/ext/ext',
            valueBoolean: true
        }];

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an Extension when url missing', function () {
        delete data.url;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Extension with more than one value[x]', function () {
        data.valueInteger = 1;
        data.valueCode = 'ok';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});