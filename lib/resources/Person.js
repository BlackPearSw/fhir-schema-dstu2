var elements = require('../elements');
var registry = require('../registry');
var DomainResource = require('./DomainResource');

var link = function () {
    var schema = {
        title: 'Person.link',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['target'],
        properties: {
            target: elements.Reference({types: ['Patient','Practitioner','RelatedPerson','Person']}),
            assurance: elements.code({codes: registry.valueSets.IdentityAssuranceLevel.codes})
        }
    };

    return schema;
};

var Person = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'Person'})
        ],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            name: {
                type: 'array',
                items: {$ref: 'HumanName'}
            },
            telecom: {
                type: 'array',
                items: {$ref: 'ContactPoint'}
            },
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            birthDate: {$ref: 'date'},
            address: {
                type: 'array',
                items: {$ref: 'Address'}
            },
            photo: {
                type: 'array',
                items: {$ref: 'Attachment'}
            },
            managingOrganization: elements.Reference({types: ['Organization']}),
            link: {
                type: 'array',
                items: link()
            },
            active: {$ref: 'boolean'}
        }
    };

    return schema;
};

module.exports = Person;