var constants = require('../constants');

function makeJsonSchema(resource) {
    var make = fnMake[resource.resourceType];

    if (!make) throw new Error('Unknown resourceType: ' + resource.resourceType);

    var schema = make(resource);
    visit(schema, decorateSchema);

    return schema;
}

var fnMake = {
    StructureDefinition: makeForStructureDefinition,
    ValueSet: makeForValueSet
};

var visit = function (schema, fn) {
    for (var child in schema) {
        fn(schema[child]);
    }
};

function decorateSchema(schema) {
    schema.$schema = constants.$SCHEMA;
}

/*
 StructureDefinition
 */
function makeForStructureDefinition(structureDefinition) {
    if (!structureDefinition.differential) {
        throw new Error('differential undefined');
    }

    var schema = {};
    structureDefinition.differential.element.forEach(function (element) {
        var elementType = typeOfNew(element);

        var add = fnAdd[elementType];
        if (!add) throw new Error('Unknown element type: ' + elementType);
        if (add) add(structureDefinition, element, schema);
    });
    return schema;
}

var fnAdd = {
    Resource: addResource,
    DomainResource: addDomainResource,
    BackboneElement: addBackboneElementNew,
    Property: addPropertyNew
};

function addResource(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var base = parseFilepath(structureDefinition.base);

    var child = {
        id: constants.BASE_URL + path.original,
        title: path.original,
        type: 'object',
        allOf: [],
        required: [],
        properties: {}
    };

    if (base.property !== '') {
        child.allOf.push({$ref: base.property});
    }

    child.properties.resourceType = {$ref: 'string'};
    child.required.push('resourceType');
    if (!structureDefinition.abstract) {
        child.properties.resourceType.pattern = '^' + path.original + '$'; //TODO: ConstrainedType?
    }

    schema[structureDefinition.id] = child;

    if (isConstrained(element)) {
        addConstraintNew(structureDefinition, element, schema);
    }
}

function addDomainResource(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var base = parseFilepath(structureDefinition.base);

    var child = {
        id: constants.BASE_URL + path.original,
        title: path.original,
        type: 'object',
        allOf: [],
        required: [],
        properties: {}
    };

    if (base.property !== '') {
        child.allOf.push({$ref: base.property});
    }

    if (!structureDefinition.abstract) {
        child.properties.resourceType = {
            type: 'string',
            pattern: '^' + path.original + '$' //TODO: ConstrainedType
        };
    }

    schema[structureDefinition.id] = child;

    if (isConstrained(element)) {
        addConstraintNew(structureDefinition, element, schema);
    }
}

function addBackboneElementNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);

    schema[path.parent].properties[path.property] = {$ref: path.original};

    var child = {
        id: constants.BASE_URL + path.original,
        title: path.original,
        type: 'object',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: [],
        properties: {}
    };

    schema[path.original] = child;

    if (isArray(element)) {
        arrayPropertyNew(structureDefinition, element, schema);
    }

    if (isRequired(element)) {
        requirePropertyNew(structureDefinition, element, schema)
    }

    if (isConstrained(element)) {
        addConstraintNew(structureDefinition, element, schema);
    }
}

function addPropertyNew(structureDefinition, element, schema) {
    function isResourceProperty(){
        return element.type[0].code === 'Resource';
    }

    if (isChoice(element)) {
        return addChoiceNew(structureDefinition, element, schema);
    }

    var path = parsePath(element.path);
    var parent = schema[path.parent];

    if (isNameReference(element)) {
        parent.properties[path.property] = {$ref: structureDefinition.id + '.' + element.nameReference};
    }
    else if (isResourceProperty(element)){
        parent.properties[path.property] = {$ref: 'Any-Resource'};
    }
    else {
        parent.properties[path.property] = {$ref: element.type[0].code};
    }

    if (isBound(element)) {
        bindPropertyNew(structureDefinition, element, schema);
    }

    if (isArray(element)) {
        arrayPropertyNew(structureDefinition, element, schema);
    }

    if (isRequired(element)) {
        requirePropertyNew(structureDefinition, element, schema)
    }
}

function isArray(element) {
    if (!element.max) return false;

    return element.max !== '1';
}

function arrayPropertyNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var parent = schema[path.parent];

    if (element.max === '*') {
        parent.properties[path.property] = {
            type: 'array',
            items: parent.properties[path.property]
        }
    }
    else {
        parent.properties[path.property] = {
            type: 'array',
            items: parent.properties[path.property],
            maxItems: Number(element.max)
        }
    }
}

function isRequired(element) {
    return element.min > 0;
}

function requirePropertyNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var parent = schema[path.parent];

    parent.required.push(path.property);

    var property = parent.properties[path.property];
    if (property.type === 'array') {
        property.minItems = element.min;
    }
}

function isConstrained(element) {
    if (!element.constraint) return false;

    return element.constraint.length > 0;
}

function addConstraintNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);

    element.constraint.forEach(function (constraint) {
        var id = path.original + '.' + constraint.key;

        schema[path.original].allOf.push({$ref: id});

        var child = {
            id: constants.BASE_URL + id,
            title: id,
            format: 'ConstraintNotImplemented'
        };

        schema[id] = child;
    });
}

function isChoice(element) {
    return element.path.match(/\[x\]$/);
}

function addChoiceNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var parent = schema[path.parent];

    var constraint = {
        oneOf: []
    };
    element.type.forEach(function (type) {
        var property = path.property.substring(0, path.property.length - 3);
        property += type.code[0].toUpperCase();
        property += type.code.substring(1);

        parent.properties[property] = {$ref: type.code};
        constraint.oneOf.push({required: [property]});
    });

    if (isArray(element)) {
        arrayProperty(structureDefinition, element, schema);
    }

    if (!isRequired(element)) {
        constraint.oneOf.push({
            not: {
                oneOf: constraint.oneOf.map(function (item) {
                    return item;
                })
            }
        });
    }

    parent.allOf.push(constraint);
}

function isNameReference(element) {
    return element.nameReference ? true : false;
}

function isBound(element) {
    if (!element.binding) return false;

    return element.binding.strength === 'required';
}

function bindPropertyNew(structureDefinition, element, schema) {
    var path = parsePath(element.path);
    var parent = schema[path.parent];

    if (element.binding.valueSetReference) {
        var type = parseFilepath(element.binding.valueSetReference.reference);
        parent.properties[path.property] = {
            allOf: [
                parent.properties[path.property],
                {$ref: type.property}
            ]
        }
    }
}

/*
 ValueSet
 */
function makeForValueSet(valueSet) {
    var schema = {};
    var child = {
        id: constants.BASE_URL + valueSet.id
    };

    //inline code systems
    if (hasInlineCodeSystem(valueSet)) {
        var code = {};
        var codeableConcept = {};

        addInlineCodeSystemForCode(valueSet, code);
        addInlineCodeSystemForCodeableConcept(valueSet, codeableConcept);
        child.oneOf = [code, codeableConcept];
    }
    else {
        child.format = 'ValueSetNotImplemented';
    }

    schema[valueSet.id] = child;

    return schema;
}

function hasInlineCodeSystem(valueSet) {
    if (valueSet.compose) return false;

    return valueSet.codeSystem !== undefined;
}

function addInlineCodeSystemForCode(valueSet, code) {
    code.type = 'string';
    code.enum = expandConcepts(valueSet).map(function (concept) {
        return concept.code;
    });
}

function addInlineCodeSystemForCodeableConcept(valueSet, codeableConcept) {
    codeableConcept.type = 'object';

    codeableConcept.required = codeableConcept.required || [];
    codeableConcept.required.push('coding');

    codeableConcept.properties = codeableConcept.properties || {};
    codeableConcept.properties.coding = {
        type: 'array',
        minItems: 1,
        items: [
            {
                required: ['code'],
                properties: {
                    system: valueSet.codeSystem.system,
                    code: {
                        enum: expandConcepts(valueSet).map(function (concept) {
                            return concept.code;
                        })
                    }
                }

            }
        ],
        additionalItems: true
    }
}

function expandConcepts(valueSet) {
    function addCodesToExpansion(expansion, concept) {
        expansion.push({
            system: valueSet.codeSystem.system,
            code: concept.code
        });

        if (concept.concept) {
            expansion = expand(concept.concept, expansion);
        }

        return expansion;
    }

    function expand(concept, expansion) {
        return concept.reduce(addCodesToExpansion, expansion);
    }

    return expand(valueSet.codeSystem.concept, []);
}

function parsePath(path) {
    var tokens = path.split('.');
    var property = tokens[tokens.length - 1];
    tokens.splice(-1, 1);
    var parent = tokens.join('.');

    return {
        original: path,
        parent: parent,
        property: property
    }
}

function parseFilepath(path) {
    var DELIMITER = '/';
    var parse = {};
    var tokens = path.split(DELIMITER);

    parse.original = path;
    parse.property = tokens.pop();
    parse.parent = tokens.join(DELIMITER);

    return parse;
}

function typeOfNew(element) {

    //TODO: [FHIR-#8720]
    /*
     Workaround is to assume if no type this is BackboneElement.
     */
    function assumeBackboneElement(element) {
        return element.type ? false : true;
    }

    function isRoot(element) {
        return element.path.split('.').length === 1;
    }

    if (isRoot(element)) {
        return element.type ? element.type[0].code : 'Resource';
    }

    if (isNameReference(element)) {
        return 'Property';
    }

    if (assumeBackboneElement(element)) {
        return 'BackboneElement';
    }

    //assume property
    return 'Property'
}

module.exports = {
    makeJsonSchema: makeJsonSchema
};