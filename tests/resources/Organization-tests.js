var Organization = require('../../lib').resources.Organization;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('resources.Organization', function () {

    var schema = Organization();
    var validator = new Validator(schema, formats);
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Organization',
            id: '123456',
            identifier: [
                {
                    use: 'official',
                    system: 'http://health.org/identifier',
                    value: 'B122'
                }
            ],
            active: true,
            type: {
                text: 'Hospital'
            },
            name: 'The Medical Clinic',
            telecom: [
                {
                    system: 'email',
                    value: 'clinic@health.org'
                }
            ],
            address: [
                {
                    text: 'The Medical Clinic, Bigtown'
                }
            ],
            partOf: {
                display: 'NHS'
            },
            contact: [
                {
                    purpose: {
                        text: 'Furtherance of public health'
                    }
                }
            ]
        };
    });

    it('validates an Organization', function () {
        var result = validator.validate(data);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an Organization with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });
});