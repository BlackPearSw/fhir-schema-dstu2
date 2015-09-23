var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('resources.DomainResource', function () {

    var schema = fhir.schema.DomainResource;
    var data;

    beforeEach(function(){
        data = {
            resourceType: 'Foo',
            meta: {
                versionId: '1',
                lastUpdated: '2015-04-01T12:30:12.000Z',
                profile: [
                    'http://foo.bar/Patient'
                ]
            },
            implicitRules: 'http://foo.bar/rules',
            language: 'en-GB',
            contained: [
                {
                    resourceType: 'Patient'
                }
            ],
            extension: [
                {
                    url: 'http://foo.bar/x',
                    valueBoolean: true
                }
            ]

        };
    });

    it('validates a DomainResource', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a DomainResource with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });


});