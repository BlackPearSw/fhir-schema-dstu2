var tv4 = require('tv4');

var expect = require('chai').expect;

describe('tv4', function () {

    var A = {properties: {b: {$ref: 'B'}}};
    var B = {properties: {a: {$ref: 'A'}}};
    tv4.addSchema('A', A);
    tv4.addSchema('B', B);

    it('validates', function () {

        var a = {
            b: {
                a: {
                    b: {

                    }
                }
            }
        }

        var checkRecursive = false;
        var banUnknownProperties = true;

        var result = tv4.validateMultiple(a, A, checkRecursive, banUnknownProperties);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
        expect(result.errors.length).to.eql(0);
        expect(result.missing.length).to.eql(0);
    });
});

