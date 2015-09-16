var elements = require('../elements');
var DomainResource = require('./DomainResource');

var contact = function () {
    var schema = {
        title: 'Organization.contact',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            purpose: {$ref: 'CodeableConcept'},
            name: {$ref: 'HumanName'},
            telecom: {
                type: 'array',
                items: {$ref: 'ContactPoint'}
            },
            address: {$ref: 'Address'}
        }
    };

    return schema;
};

var Organization = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'Organization'})
        ],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            active: {$ref: 'boolean'},
            type: {$ref: 'CodeableConcept'},
            name: {$ref: 'string'},
            telecom: {
                type: 'array',
                items: {$ref: 'ContactPoint'}
            },
            address: {
                type: 'array',
                items: {$ref: 'Address'}
            },
            partOf: elements.Reference({types: ['Organization']}),
            contact: {
                type: 'array',
                items: contact()
            }
        }
    };

    return schema;
};


module.exports = Organization;