var fhir = require('../../lib');
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('elements.Coding', function () {

    var schema = fhir.schema.Coding;
    var data;
    var validator = new Validator(fhir.schema, fhir.formats);

    beforeEach(function () {
        data = {
            system: 'http://foo.bar',
            version: '1',
            code: 'f12345',
            display: 'foo',
            primary: false
        };
    });

    it('validates a Coding', function () {
        var result = validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid Coding (primary not boolean)', function () {
        data.primary = 'fail';

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});