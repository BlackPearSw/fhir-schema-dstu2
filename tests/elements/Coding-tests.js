var Coding = require('../../lib/index').elements.Coding;
var formats = require('../../lib').formats;
var definitions = require('../../lib').schema;
var Validator = require('../../lib').Validator;

var expect = require('chai').expect;

describe('elements.Coding', function () {

    var schema = Coding();
    var data;
    var validator = new Validator(definitions, formats);

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

    it('validates a Coding bound to a system', function () {

        var schema = Coding({binding: {system: 'http://foo.bar'}});

        var data = {
            system: 'http://foo.bar',
            code: 'fubar'
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects a Coding from invalid system', function () {

        var schema = Coding({binding: {system: 'http://foo.bar'}});

        var data = {
            system: 'http://bar.foo',
            code: 'fubar'
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('validates a Coding bound to a ValueSet', function () {

        var schema = Coding({binding: {codes: ['foo', 'bar']}});

        var data = {
            system: 'http://foo.bar',
            code: 'foo'
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects a Coding from invalid ValueSet', function () {

        var schema = Coding({binding: {codes: ['foo', 'bar']}});

        var data = {
            system: 'http://foo.bar',
            code: 'fubar'
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
})
;