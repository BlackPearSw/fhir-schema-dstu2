var CodeableConcept = require('../../lib/index').elements.CodeableConcept;
var Validator = require('../../lib/').Validator;
var formats = require('../../lib/').formats;

var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.CodeableConcept', function () {

    var schema = CodeableConcept();
    var validator;

    before(function () {
        schema = CodeableConcept();
        validator = new Validator(schema, formats);
    });

    it('validates a CodeableConcept', function () {

        var data = {
            coding: [{
                system: 'http://foo.bar',
                code: 'fubar'
            }]
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid CodeableConcept', function () {
        var data = {
            coding: {
                system: 'http://foo.bar',
                code: 'fubar'
            }
        };

        var result = validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    describe('when bound to a system', function () {

        var binding = {
            binding: {
                system: 'http://foo.bar'
            }
        };
        var schema = CodeableConcept(binding);
        var validator = new Validator(schema, formats);

        it('validates a CodeableConcept bound to a system', function () {
            var data = {
                coding: [{
                    system: 'http://foo.bar',
                    code: 'fubar'
                }]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });

        it('rejects a CodeableConcept when invalid system', function () {
            var data = {
                coding: [{
                    system: 'http://bar.foo',
                    code: 'fubar'
                }]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('validates if bound to a system but no coding', function () {
            var data = {};

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });

        it('validates if bound to a system but no coding entries', function () {
            var data = {
                coding: []
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });

        it('validates if bound to a system when additional entries', function () {
            var data = {
                coding: [
                    {
                        system: 'http://foo.bar',
                        code: 'fubar'
                    },
                    {
                        system: 'http://bar.foo',
                        code: 'fubar alternative'
                    }
                ]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });
    });

    describe('when bound to a system and values', function () {

        var binding = {
            binding: {
                system: 'http://foo.bar',
                codes: ['foo', 'bar']
            }
        };
        var schema = CodeableConcept(binding);
        var validator = new Validator(schema, formats);

        it('validates a CodeableConcept bound to a system', function () {
            var data = {
                coding: [{
                    system: 'http://foo.bar',
                    code: 'foo'
                }]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });

        it('rejects when invalid code', function () {
            var data = {
                coding: [{
                    system: 'http://foo.bar',
                    code: 'fubar'
                }]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('rejects when invalid system', function () {
            var data = {
                coding: [{
                    system: 'http://bar.foo',
                    code: 'fubar'
                }]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('validates if bound to a system but no coding', function () {
            var data = {};

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });

        it('validates if bound to a system but no coding entries', function () {
            var data = {
                coding: []
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
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
                        code: 'fubar alternative'
                    }
                ]
            };

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.true;
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

            var result = validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});