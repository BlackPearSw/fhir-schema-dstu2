var array = require('../../lib').assertions.array;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('assertions.array', function () {
    describe('hasOneMatch', function () {
        var fn = array.hasOneMatch({system: 'http://foo.bar'}, 'array has one match');

        it('returns null', function () {
            var data = [
                {system: 'http://foo.bar'}
            ];

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns error if no matches', function () {
            var data = [
                {system: 'http://bar.foo'}
            ];

            var result = fn(data);

            expect(result).to.not.equal(null);
        });

        it('returns error if more than one match', function () {
            var data = [
                {system: 'http://foo.bar'},
                {system: 'http://foo.bar'}
            ];

            var result = fn(data);

            expect(result).to.not.equal(null);
        });
    });

    describe('hasMatchOrIsEmpty', function () {
        var fn = array.hasMatchOrIsEmpty({system: 'http://foo.bar'}, 'array has match or is empty');

        it('returns null if empty', function () {
            var data = [];

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns null', function () {
            var data = [
                {system: 'http://foo.bar'}
            ];

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns error if no matches', function () {
            var data = [
                {system: 'http://bar.foo'}
            ];

            var result = fn(data);

            expect(result).to.not.equal(null);
        });

        it('returns null if more than one match', function () {
            var data = [
                {system: 'http://foo.bar'},
                {system: 'http://foo.bar'}
            ];

            var result = fn(data);

            expect(result).to.equal(null);
        });
    });
});