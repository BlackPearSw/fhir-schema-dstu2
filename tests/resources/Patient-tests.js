var Patient = require('../../lib').resources.Patient;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('resources.Patient', function () {

    var schema = Patient();
    var validator = new Validator(schema, formats);
    var data;

    beforeEach(function(){
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
            deceasedBoolean: false,
            multipleBirthBoolean: true
        };
    });

    it('validates a Patient', function () {
        var result = validator.validate(data);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Patient with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a Patient with more than one deceased[x]', function () {
        data.deceasedDateTime = '2014-04-20';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a Patient with more than one multipleBirth[x]', function () {
        data.multipleBirthInteger = 2;

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });
});