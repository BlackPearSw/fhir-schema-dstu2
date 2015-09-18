var CodeableConcept = require('../../lib/utils/assertions').CodeableConcept;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('assertions.CodeableConcept', function () {
    describe('isBoundTo', function () {

        describe('when bound to system', function(){
            var fn;

            before(function(){
                fn = CodeableConcept.isBoundTo({system: 'http://foo.bar'}, 'CodeableConcept is bound');
            });

            it('returns null when one match', function () {
                var data = {
                    coding: [
                        {system: 'http://foo.bar'}
                    ]
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('returns null when one match from many', function () {
                var data = {
                    coding: [
                        {system: 'http://foo.bar'},
                        {system: 'http://bar.foo'}
                    ]
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('returns null when coding undefined', function () {
                var data = {};

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('returns null when coding empty', function () {
                var data = {
                    coding: []
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('returns error if invalid', function () {
                var data = {
                    coding: [
                        {system: 'http://bar.foo'}
                    ]
                };

                var result = fn(data);

                expect(result).to.not.equal(null);
            });
        });

        describe('when bound to a system and values', function () {

            var binding = {
                    system: 'http://foo.bar',
                    codes: ['foo', 'bar']
                };
            var fn;

            before(function(){
                fn = CodeableConcept.isBoundTo(binding, 'CodeableConcept is bound');
            });

            it('returns null when match', function () {
                var data = {
                    coding: [{
                        system: 'http://foo.bar',
                        code: 'foo'
                    }]
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('rejects when invalid code', function () {
                var data = {
                    coding: [{
                        system: 'http://foo.bar',
                        code: 'fubar'
                    }]
                };

                var result = fn(data);

                expect(result).to.not.equal(null);
            });

            it('rejects when invalid system', function () {
                var data = {
                    coding: [{
                        system: 'http://bar.foo',
                        code: 'fubar'
                    }]
                };

                var result = fn(data);

                expect(result).to.not.equal(null);
            });

            it('validates if bound to a system but no coding', function () {
                var data = {};

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('validates if bound to a system but no coding entries', function () {
                var data = {
                    coding: []
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('validates if bound to a system when additional entries', function () {
                var data = {
                    coding: [
                        {
                            system: 'http://foo.bar',
                            code: 'foo'
                        },
                        {
                            system: 'http://bar.foo',
                            code: 'fubar'
                        }
                    ]
                };

                var result = fn(data);

                expect(result).to.equal(null);
            });

            it('rejects if not match for system AND code', function () {
                var data = {
                    coding: [
                        {
                            system: 'http://foo.bar',
                            code: 'fubar'
                        },
                        {
                            system: 'http://bar.foo',
                            code: 'foo'
                        }
                    ]
                };

                var result = fn(data);

                expect(result).to.not.equal(null);
            });
        });
    });
});