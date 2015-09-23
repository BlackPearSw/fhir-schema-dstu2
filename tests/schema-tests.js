var tv4 = require('tv4');

var expect = require('chai').expect;

describe('tv4', function () {

    describe('circular references', function () {
        var A = {properties: {b: {$ref: 'B'}}};
        var B = {properties: {a: {$ref: 'A'}}};
        tv4.addSchema('A', A);
        tv4.addSchema('B', B);

        it('validates', function () {

            var a = {
                b: {
                    a: {
                        b: {}
                    }
                }
            };

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


    describe('FHIR binding poc', function () {
        var Schema = {
            oneOf: [
                {
                    type: 'string',
                    enum: ['a', 'b', 'c']
                },
                {
                    type: 'object',
                    required: ['coding'],
                    properties: {
                        coding: {
                            type: 'array',
                            minItems: 1,
                            items: [
                                {
                                    required: ['code'],
                                    properties: {
                                        code: {
                                            enum: ['a', 'b', 'c']
                                        }
                                    }
                                }
                            ],
                            additionalItems: true
                        }
                    }
                }
            ]
        };

        it('should validate code', function () {
            var a = 'a';

            var checkRecursive = false;
            var banUnknownProperties = true;
            var result = tv4.validateMultiple(a, Schema, checkRecursive, banUnknownProperties);

            if (!result.valid) {
                console.log(result);
            }

            expect(result.valid).to.be.true;
            expect(result.errors.length).to.eql(0);
            expect(result.missing.length).to.eql(0);
        });

        it('should validate CodeableConcept', function () {
            var a = {
                coding: [
                    {
                        code: 'a'
                    },
                    {
                        code: 'z'
                    }
                ]
            };

            var checkRecursive = false;
            var banUnknownProperties = true;
            var result = tv4.validateMultiple(a, Schema, checkRecursive, banUnknownProperties);

            if (!result.valid) {
                console.log(result);
            }

            expect(result.valid).to.be.true;
            expect(result.errors.length).to.eql(0);
            expect(result.missing.length).to.eql(0);
        })
    })
});

