var choice = require('../../lib/utils/assertions').choice;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('assertions.choice', function () {
    describe('using prefix', function(){
        var fn = choice('foo', 'foo is a choice');

        it('returns null when no matches', function () {
            var data = {
                bar: 'abc'
            };

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns null when one match', function () {
            var data = {
                bar: 'abc',
                fooX: 'xyz'
            };

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns error if more than one match', function () {
            var data = {
                bar: 'abc',
                fooX: 'xyz',
                fooY: 'zyx'
            };

            var result = fn(data);

            expect(result).to.not.equal(null);
        });
    })

    describe('using set', function(){
        var fn = choice(['fooX', 'fooY'], 'foo[x] is a choice');

        it('returns null when no matches', function () {
            var data = {
                bar: 'abc',
                fooIgnore: true
            };

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns null when one match', function () {
            var data = {
                bar: 'abc',
                fooX: 'xyz',
                fooIgnore: true
            };

            var result = fn(data);

            expect(result).to.equal(null);
        });

        it('returns error if more than one match', function () {
            var data = {
                bar: 'abc',
                fooX: 'xyz',
                fooY: 'zyx',
                fooIgnore: true
            };

            var result = fn(data);

            expect(result).to.not.equal(null);
        });
    })
});