var fhir = require('../../../lib');

var expect = require('chai').expect;

describe('resources.Patient', function () {

    var schema = fhir.schema.Patient;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Patient',
            id: '123456',
            meta: {
                versionId: '1',
                lastUpdated: '2015-04-01T12:30:12.000Z',
                profile: [
                    'http://foo.bar/Patient'
                ]
            },
            implicitRules: 'http://foo.bar/rules',
            language: 'en-GB',
            text: {
                status: 'generated',
                div: '<p>John J. Doe (2010-04-01)</p>'
            },
            gender: 'male',
            deceasedBoolean: false,
            multipleBirthBoolean: true,
            address: [
                {
                    text: '59 Lincombe Drive, Leeds, West Yorkshire, LS8 1PS',
                    line: [
                        '59 Lincombe Drive',
                        'Leeds',
                        'West Yorkshire'
                    ],
                    city: 'Leeds',
                    state: 'West Yorkshire',
                    postalCode: 'LS8 1PS'
                }
            ]
        };
    });

    it('validates a Patient', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Patient with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Patient with more than one deceased[x]', function () {
        data.deceasedDateTime = '2014-04-20';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Patient with more than one multipleBirth[x]', function () {
        data.multipleBirthInteger = 2;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});