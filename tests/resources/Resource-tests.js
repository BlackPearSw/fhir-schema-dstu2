var Resource = require('../../lib').resources.Resource;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('resources.Resource', function () {

    var schema = Resource();
    var validator = new Validator(schema, formats);

    var data;

    beforeEach(function(){
        data = {
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
        var result = validator.validate(data);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Resource with invalid id', function () {
        data.id = '$%^&';

        var result = validator.validate(data);

        expect(result.valid).to.be.false;
    });
});