var ContainedResource = require('../../lib').resources.ContainedResource;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('resources.ContainedResource', function () {

    var schema = ContainedResource({resourceType:'Foo'});
    var validator = new Validator(schema, formats);

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
        var result = validator.validate(data);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a ContainedResource with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with meta.versionId', function () {
        data.meta.versionId = '1';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with meta.lastUpdated', function () {
        data.meta.lastUpdated = '2015-08-12';

        var result = validator.validate(data);

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

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a ContainedResource with narrative', function () {
        data.text = {
            status: 'generated',
            div: ''
        };

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });
});