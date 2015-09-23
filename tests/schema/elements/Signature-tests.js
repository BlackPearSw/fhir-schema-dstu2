var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('elements.Signature', function () {

    var schema = fhir.schema.Signature;
    var data;

    beforeEach(function(){
        data =  {
            type: {
                code: 'digital'
            },
            when: '2015-04-12T17:34:23:004Z',
            whoUri: 'http://health.org/dr',
            contentType: 'application/xml',
            blob: 'ABCDEF01234567890'
        };
    });

    it('validates a Signature', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });


    it('rejects a Signature without type', function () {
        delete data.type;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Signature without when', function () {
        delete data.when;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Signature without who[x]', function () {
        delete data.whoUri;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Signature with more than one who[x]', function () {
        data.whoReference = {
            display: 'The Signer'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Signature without contentType', function () {
        delete data.contentType;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Signature without blob', function () {
        delete data.blob;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});