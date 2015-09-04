var id = require('../../lib/index').elements.id;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.id', function () {
    var schema = id();

    it('validates id', function () {
        var data = '123456aBC';

        var result = tv4.validate(data, schema);

        expect(result).to.be.true;
    });

    it('rejects an invalid id', function () {
        var data = '!£$';

        var result = tv4.validate(data, schema);

        expect(result).to.be.false;
    });
});