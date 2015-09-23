var fhir = require('../../lib/');
var expect = require('chai').expect;

describe('utils.validator', function () {

    var schema;
    var data;

    beforeEach(function(){
        schema = {
            allOf: [
                fhir.schema.Resource
            ],
            properties: {}
        };

        data = {
            resourceType: 'Foo'
        };
    });

    it('validates a Resource', function () {
        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('decorates result with warnings', function () {
        var result = fhir.validator.validate(data, schema);

        expect(result.warnings).to.be.an('array');
    });

    it('NB: does not reject a Resource with unknown format', function () {
        schema.format = 'Unknown';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects a Resource with unknown property', function () {
        data.unknown = 'fubar';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Resource with unknown schema', function () {
        schema.properties.bar = {$ref: 'Bar'};
        data.bar = 'fubar';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});