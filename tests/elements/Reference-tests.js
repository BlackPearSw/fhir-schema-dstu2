var Reference = require('../../lib/index').elements.Reference;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.Reference', function () {

    var schema = {
        type: 'object',
        properties: {
            value: Reference('Foo')
        }
    };

    it('validates a Reference', function () {
        var data = {
            value: {
                reference: 'Foo/123',
                display: 'Sample foo'
            }
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });
});