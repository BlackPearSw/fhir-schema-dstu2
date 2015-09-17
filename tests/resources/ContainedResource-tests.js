var Validator = require('../../lib').Validator;
var fhir = require('../../lib');

var expect = require('chai').expect;

describe('resources.ContainedResource', function () {

    var schema = fhir.schema.ContainedResource;
    var validator = new Validator(fhir.schema, fhir.formats);

    var data;

    beforeEach(function(){
        data = {
            resourceType: 'Foo',
            meta: {
                profile: [
                    'http://foo.bar/Patient'
                ]
            },
            implicitRules: 'http://foo.bar/rules',
            language: 'en-GB'
        };
    });

    it('validates a ContainedResource', function () {
        var result = validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a ContainedResource with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with meta.versionId', function () {
        data.meta.versionId = '1';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with meta.lastUpdated', function () {
        data.meta.lastUpdated = '2015-08-12';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with contained', function () {
        data.contained = [
            {
                resourceType: 'Bar',
                foo: 'fubar',
                text: 'The quick brown fox etc'
            }
        ];

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with narrative', function () {
        data.text = {
            status: 'generated',
            div: ''
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});