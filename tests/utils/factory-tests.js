var factory = require('../../lib/utils/factory');
var expect = require('chai').expect;
var should = require('chai').should();

describe('utils.factory', function () {
    var profile;
    var schemas;

    beforeEach(function () {
        profile = {
            resourceType: 'StructureDefinition',
            id: 'Foo',
            base: 'http://hl7.org/fhir/StructureDefinition/DomainResource',
            differential: {
                element: [
                    {
                        path: 'Foo',
                        min: 0,
                        max: '*',
                        type: [
                            {
                                code: 'DomainResource'
                            }
                        ],
                        constraint: [
                            {
                                key: 'foo-1',
                                severity: 'error'
                            }
                        ]
                    },
                    {
                        path: 'Foo.property',
                        min: 0,
                        max: '1',
                        type: [
                            {
                                code: 'string'
                            }
                        ]
                    },
                    {
                        path: 'Foo.arrayProperty',
                        min: 0,
                        max: '*',
                        type: [
                            {
                                code: 'string'
                            }
                        ]
                    },
                    {
                        path: 'Foo.bar',
                        constraint: [
                            {
                                key: 'foo-2',
                                severity: 'error'
                            }
                        ]
                    },
                    {
                        path: 'Foo.bar.a',
                        min: 0,
                        max: '1',
                        type: [
                            {
                                code: 'string'
                            }
                        ]
                    },
                    {
                        path: 'Foo.bar.requiredProperty',
                        min: 1,
                        max: '1',
                        type: [
                            {
                                code: 'string'
                            }
                        ]
                    },
                    {
                        path: 'Foo.bar.codeWithRequiredBinding',
                        min: 0,
                        max: '1',
                        type: [
                            {
                                code: 'code'
                            }
                        ],
                        binding: {
                            strength: 'required',
                            valueSetReference: {
                                reference: 'http://hl7.org/fhir/ValueSet/appointmentstatus'
                            }
                        }
                    },
                    {
                        path: 'Foo.rab',
                        min: 1,
                        max: '*'
                    }
                ]
            }
        };
        schemas = {};
    });

    describe('makeJsonSchema', function () {

        it('should be defined as a function', function () {
            should.exist(factory.makeJsonSchema);
            factory.makeJsonSchema.should.be.a('function')
        });

        it('throws error for unknown resourceType', function () {
            var resource = {
                resourceType: 'Unknown'
            };

            function fn() {
                factory.makeJsonSchema(resource);
            }

            expect(fn).to.throw(Error);
        });

        describe('for StructureDefinition', function () {
            function makeStructureDefinition() {
                return {
                    resourceType: 'StructureDefinition',
                    id: 'Foo',
                    abstract: false,
                    base: 'http://hl7.org/fhir/StructureDefinition/DomainResource',
                    differential: {
                        element: [
                            {
                                path: 'Foo',
                                min: 0,
                                max: '*',
                                type: [
                                    {
                                        code: 'DomainResource'
                                    }
                                ],
                                constraint: [
                                    {
                                        key: 'foo-1',
                                        severity: 'error'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.property',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.propertyCodeableConcept',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'CodeableConcept'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.propertyArray',
                                min: 0,
                                max: '*',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.propertyArrayLimited',
                                min: 0,
                                max: '3',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.propertyRequired',
                                min: 1,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.propertyArrayRequired',
                                min: 1,
                                max: '*',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.choice[x]',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    },
                                    {
                                        code: 'boolean'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.xChoice',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.choiceRequired[x]',
                                min: 1,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    },
                                    {
                                        code: 'boolean'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.codeBound',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'code'
                                    }
                                ],
                                binding: {
                                    strength: 'required',
                                    valueSetReference: {
                                        reference: 'http://hl7.org/fhir/ValueSet/foostatus'
                                    }
                                }
                            },
                            {
                                path: 'Foo.codeableConceptBound',
                                min: 0,
                                max: '1',
                                type: [
                                    {
                                        code: 'CodeableConcept'
                                    }
                                ],
                                binding: {
                                    strength: 'required',
                                    valueSetReference: {
                                        reference: 'http://hl7.org/fhir/ValueSet/foostatus'
                                    }
                                }
                            },
                            {
                                path: 'Foo.backbone',
                                constraint: [
                                    {
                                        key: 'foo-2',
                                        severity: 'error'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.backbone.bar',
                                min: 1,
                                max: '1',
                                type: [
                                    {
                                        code: 'string'
                                    }
                                ]
                            },
                            {
                                path: 'Foo.backboneRequired',
                                min: 1
                            },
                            {
                                path: 'Foo.backboneArray',
                                min: 0,
                                max: '*'
                            },
                            {
                                path: 'Foo.backboneArrayRequired',
                                min: 1,
                                max: '*'
                            }
                        ]
                    }
                }
            }

            describe('when successful', function () {
                var resource;
                var schema;

                before(function () {
                    resource = makeStructureDefinition();
                    schema = factory.makeJsonSchema(resource);
                    console.log(schema);
                });

                var visit = function (schema, fn) {
                    var i = 0;
                    for (var child in schema) {
                        fn(schema[child], i);
                        i++;
                    }
                };

                it('schema is an object', function () {
                    schema.should.be.an('object');
                });

                it('schema has a child for each DomainResource, BackboneElement', function () {
                    Object.keys(schema).length.should.equal(5);
                });

                it('schema has a property for each element', function () {
                    var expected = [18, 1, 0, 0, 0];

                    visit(schema, function (child, i) {
                        Object.keys(child.properties).length.should.equal(expected[i]);
                    });
                });

                it('schema has a property', function () {
                    should.exist(schema['Foo'].properties['property']);
                    schema['Foo'].properties['property'].should.deep.equal({$ref: 'string'});
                });

                it('schema has a CodeableConcept property', function () {
                    should.exist(schema['Foo'].properties['propertyCodeableConcept']);
                    schema['Foo'].properties['propertyCodeableConcept'].should.deep.equal({$ref: 'CodeableConcept'});
                });

                it('schema has a property array', function () {
                    should.exist(schema['Foo'].properties['propertyArray']);
                    schema['Foo'].properties['propertyArray'].should.deep.equal({
                        type: 'array',
                        items: {$ref: 'string'}
                    });
                });

                it('schema has a property array limited to a fixed number of items', function () {
                    should.exist(schema['Foo'].properties['propertyArrayLimited']);
                    schema['Foo'].properties['propertyArrayLimited'].should.deep.equal({
                        type: 'array',
                        items: {$ref: 'string'},
                        maxItems: 3
                    });
                });

                it('schema has a backbone property', function () {
                    should.exist(schema['Foo'].properties['backbone']);
                    schema['Foo'].properties['backbone'].should.deep.equal({$ref: 'Foo.backbone'});
                });

                it('schema has a choice property', function () {
                    should.exist(schema['Foo'].properties['choiceBoolean']);
                    schema['Foo'].properties['choiceBoolean'].should.deep.equal({$ref: 'boolean'});

                    should.exist(schema['Foo'].properties['choiceString']);
                    schema['Foo'].properties['choiceString'].should.deep.equal({$ref: 'string'});

                    schema['Foo'].allOf.should.include({
                        oneOf: [
                            {required: ['choiceString']},
                            {required: ['choiceBoolean']},
                            {
                                not: {
                                    oneOf: [
                                        {required: ['choiceString']},
                                        {required: ['choiceBoolean']}
                                    ]
                                }
                            }
                        ]
                    });
                });

                it('schema handles property with x in name', function () {
                    should.exist(schema['Foo'].properties['xChoice']);
                    schema['Foo'].properties['xChoice'].should.deep.equal({$ref: 'string'});
                });

                it('schema enforces a required property', function () {
                    should.exist(schema['Foo'].properties['propertyRequired']);
                    schema['Foo'].properties['propertyRequired'].should.deep.equal({$ref: 'string'});
                    schema['Foo'].required.should.include('propertyRequired');
                });

                it('schema enforces a required property array', function () {
                    should.exist(schema['Foo'].properties['propertyArrayRequired']);
                    schema['Foo'].properties['propertyArrayRequired'].should.deep.equal({
                        type: 'array',
                        items: {$ref: 'string'},
                        minItems: 1
                    });
                    schema['Foo'].required.should.include('propertyArrayRequired');
                });

                it('schema enforces a required choice property', function () {
                    should.exist(schema['Foo'].properties['choiceRequiredBoolean']);
                    schema['Foo'].properties['choiceRequiredBoolean'].should.deep.equal({$ref: 'boolean'});

                    should.exist(schema['Foo'].properties['choiceRequiredString']);
                    schema['Foo'].properties['choiceRequiredString'].should.deep.equal({$ref: 'string'});

                    schema['Foo'].allOf.should.include({
                        oneOf: [
                            {required: ['choiceRequiredString']},
                            {required: ['choiceRequiredBoolean']}
                        ]
                    });
                });

                it('schema enforces a required backbone property ', function () {
                    should.exist(schema['Foo'].properties['backboneRequired']);
                    schema['Foo'].properties['backboneRequired'].should.deep.equal({$ref: 'Foo.backboneRequired'});
                    schema['Foo'].required.should.include('backboneRequired');
                });

                it('schema enforces a required backbone property ', function () {
                    should.exist(schema['Foo'].properties['backboneArrayRequired']);
                    schema['Foo'].properties['backboneArrayRequired'].should.deep.equal({
                        type: 'array',
                        items: {$ref: 'Foo.backboneArrayRequired'},
                        minItems: 1
                    });
                    schema['Foo'].required.should.include('backboneArrayRequired');
                });

                it('schema enforces a code binding', function () {
                    should.exist(schema['Foo'].properties['codeBound']);
                    schema['Foo'].properties['codeBound'].should.deep.equal({
                        allOf: [
                            {$ref: 'code'},
                            {$ref: 'foostatus'}
                        ]
                    });
                });

                it('schema enforces a CodeableConcept binding', function () {
                    should.exist(schema['Foo'].properties['codeableConceptBound']);
                    schema['Foo'].properties['codeableConceptBound'].should.deep.equal({
                        allOf: [
                            {$ref: 'CodeableConcept'},
                            {$ref: 'foostatus'}
                        ]
                    });
                });

                describe('DomainResource', function () {
                    it('inherits DomainResource schema', function () {
                        should.exist(schema['Foo'].allOf[0]);
                        schema['Foo'].allOf.should.include({$ref: 'DomainResource'});
                    });

                    it('has resourceType', function () {
                        should.exist(schema['Foo'].properties.resourceType);
                        schema['Foo'].properties.resourceType.should.include({
                            type: 'string',
                            pattern: '^Foo$'
                        });
                    });

                    it('has constraints', function () {
                        should.exist(schema['Foo'].allOf);
                        schema['Foo'].allOf.should.include({$ref: 'Foo.foo-1'});
                    });

                });

                describe('BackboneElement', function () {
                    it('inherits BackboneElement schema', function () {
                        should.exist(schema['Foo.backbone'].allOf[0]);
                        schema['Foo.backbone'].allOf.should.include({$ref: 'BackboneElement'});
                    });

                    it('has constraints', function () {
                        should.exist(schema['Foo.backbone'].allOf);
                        schema['Foo.backbone'].allOf.should.include({$ref: 'Foo.backbone.foo-2'});
                    });
                });

                describe('for each child schema', function () {
                    it('$schema is set', function () {
                        visit(schema, function (child) {
                            should.exist(child.$schema);
                            child.$schema.should.equal('http://json-schema.org/draft-04/schema#');
                        });
                    });

                    it('id is set', function () {
                        visit(schema, function (child) {
                            should.exist(child.id);
                            child.id.should.match(/^http:\/\/cim.endeavourhealth.org\/schema\/fhir\/dstu2/);
                        });
                    });
                });
            });

            describe('throws error', function () {
                var resource;

                beforeEach(function () {
                    resource = makeStructureDefinition();
                });

                it('when abstract', function () {
                    resource.abstract = true;

                    function fn() {
                        factory.makeJsonSchema(resource);
                    }

                    expect(fn).to.throw(Error);
                });

                it('when missing differential', function () {
                    delete resource.differential;

                    function fn() {
                        factory.makeJsonSchema(resource);
                    }

                    expect(fn).to.throw(Error);
                });

                /*
                 it.skip('when missing element.type [Assumes this is BackboneElement]', function () {
                 delete resource.differential.element[1].type;

                 function fn() {
                 factory.makeJsonSchema(resource);
                 }

                 expect(fn).to.throw(Error);
                 });

                 it.skip('when unknown elementType [Assumes this is Property]', function () {
                 resource.differential.element[1].type = [{
                 code: 'unknown'
                 }];

                 function fn() {
                 factory.makeJsonSchema(resource);
                 }

                 expect(fn).to.throw(Error);
                 });
                 */
            });
        });

        describe('for ValueSet', function () {
            function makeValueSet() {
                return {
                    resourceType: 'ValueSet',
                    id: 'foostatus',
                    codeSystem: {
                        system: 'http://hl7.org/fhir/foostatus',
                        concept: [
                            {code: 'one'},
                            {code: 'two'},
                            {code: 'three'}
                        ]
                    }
                }
            }

            describe('when successful', function () {
                var resource;
                var schema;

                before(function () {
                    resource = makeValueSet();
                    schema = factory.makeJsonSchema(resource);
                    //console.log(schema);
                });

                var visit = function (schema, fn) {
                    var i = 0;
                    for (var child in schema) {
                        fn(schema[child], i);
                        i++;
                    }
                };

                it('schema is an object', function () {
                    schema.should.be.an('object');
                });

                it('schema has a child for each ValueSet', function () {
                    Object.keys(schema).length.should.equal(1);
                });

                it('$schema is set', function () {
                    visit(schema, function (child) {
                        should.exist(child.$schema);
                        child.$schema.should.equal('http://json-schema.org/draft-04/schema#');
                    });
                });

                it('id is set', function () {
                    visit(schema, function (child) {
                        should.exist(child.id);
                        child.id.should.match(/^http:\/\/cim.endeavourhealth.org\/schema\/fhir\/dstu2/);
                    });
                });

                it('schema enforces inline code system for code', function () {
                    var resource = makeValueSet();
                    resource.codeSystem.concept = [
                        {
                            code: 'a',
                            concept: [
                                {code: 'a1'},
                                {code: 'a2'}
                            ]
                        },
                        {
                            code: 'b',
                            concept: [
                                {code: 'b1'}
                            ]
                        }
                    ];

                    var schema = factory.makeJsonSchema(resource);

                    should.exist(schema['foostatus'].oneOf);
                    schema['foostatus'].oneOf.should.include({type: 'string', enum: ['a', 'a1', 'a2', 'b', 'b1']})
                });

                it('schema enforces inline code system for code', function () {
                    should.exist(schema['foostatus'].oneOf);
                    schema['foostatus'].oneOf.should.include({type: 'string', enum: ['one', 'two', 'three']})
                });

                it('schema enforces inline code system for CodeableConcept', function () {
                    should.exist(schema['foostatus'].oneOf);

                    var rule = schema['foostatus'].oneOf[1];

                    //only validate object
                    rule.type.should.equal('object');

                    //CodeableConcept must have coding
                    rule.required.should.include('coding');

                    //coding must have at least one item
                    rule.properties.coding.minItems.should.equal(1);

                    //Using tuple-typing //TODO: refactor to use contains for json-schema v5

                    //first item must have code matching code system
                    rule.properties.coding.items[0].required.should.include('code');
                    rule.properties.coding.items[0].properties.code.enum.should.include('one');
                    rule.properties.coding.items[0].properties.code.enum.should.include('two');
                    rule.properties.coding.items[0].properties.code.enum.should.include('three');

                    //additional items must be allowed
                    rule.properties.coding.additionalItems.should.be.true;
                });
            });

            describe('throws error', function () {
                var resource;

                beforeEach(function () {
                    resource = makeValueSet();
                });
            });
        });
    });
});