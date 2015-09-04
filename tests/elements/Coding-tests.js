var Coding = require('../../lib/index').elements.Coding;
var formats = require('../../lib').formats;
var Validator = require('../../lib').Validator;

var tv4 = require('tv4');

var expect = require('chai').expect;

describe('elements.Coding', function () {

    var schema = Coding();
    var data;
    var validator;

    beforeEach(function(){
        data =  {
            system: 'http://foo.bar',
            version: '1',
            code: 'f12345',
            display: 'foo',
            primary: false
        };
        validator = new Validator(schema, formats);
    });

    it('validates a Coding', function () {
        var result = tv4.validate(data, schema, true);

        expect(result).to.be.true;
    });

    it('rejects an invalid Coding (primary not boolean)', function () {
        data.primary = 'fail';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });

    it('validates a Coding bound to a system', function () {

        var schema = Coding({binding: {system: 'http://foo.bar'}});

        var data = {
            system: 'http://foo.bar',
            code: 'fubar'
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects a Coding from invalid system', function () {

        var schema = Coding({binding: {system: 'http://foo.bar'}});

        var data = {
            system: 'http://bar.foo',
            code: 'fubar'
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });

    it('validates a Coding bound to a ValueSet', function () {

        var schema = Coding({binding: {codes: ['foo', 'bar']}});

        var data = {
            system: 'http://foo.bar',
            code: 'foo'
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects a Coding from invalid ValueSet', function () {

        var schema = Coding({binding: {codes: ['foo', 'bar']}});

        var data = {
            system: 'http://foo.bar',
            code: 'fubar'
        };

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
})
;