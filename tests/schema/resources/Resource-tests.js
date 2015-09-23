var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('resources.Resource', function () {

    var schema = fhir.schema.Resource;
    var data;

    beforeEach(function(){
        data = {
            resourceType: 'Foo',
            id: '123456',
            meta: {
                versionId: '1',
                lastUpdated: '2015-04-01T12:30:12.000Z',
                profile: [
                    'http://foo.bar/Patient'
                ]
            },
            implicitRules: 'http://foo.bar/rules',
            language: 'en-GB'
        };
    });

    it('validates a Resource', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Resource without resourceType', function () {
        delete data.resourceType;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Resource with invalid id', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});