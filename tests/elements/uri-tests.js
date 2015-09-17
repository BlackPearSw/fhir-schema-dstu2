var fhir = require('../../lib');
var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.uri', function () {
    var schema = fhir.schema.uri;

    it('validates a uri', function () {

        var data = 'http://foo.bar';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid uri', function () {

        var data = {
            server: 123
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});