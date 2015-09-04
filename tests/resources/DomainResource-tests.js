var DomainResource = require('../../lib').resources.DomainResource;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('resources.DomainResource', function () {

    var schema = DomainResource({resourceType:'Foo'});
    var validator = new Validator(schema, formats);

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
            language: 'en-GB'

        };
    });

    it('validates a DomainResource', function () {
        var result = validator.validate(data);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a DomainResource with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a DomainResource without resourceType', function () {
        delete data.resourceType;

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });

    it('rejects a DomainResource with incorrect resourceType ', function () {
        data.resourceType = 'Bar';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });
});