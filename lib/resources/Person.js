var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');

var link = function () {
    var schema = {
        title: 'FHIR DSTU2 Person.link',
        required: ['target'],
        properties: {
            target: elements.Reference({types: ['Patient','Practitioner','RelatedPerson','Person']}),
            assurance: elements.code({codes: registry.valueSets.IdentityAssuranceLevel.codes})
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var Person = function () {
    var schema = {
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            name: {
                type: 'array',
                items: elements.HumanName()
            },
            telecom: {
                type: 'array',
                items: elements.ContactPoint()
            },
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            birthDate: elements.date(),
            address: {
                type: 'array',
                items: elements.Address()
            },
            photo: {
                type: 'array',
                items: elements.Attachment()
            },
            managingOrganization: elements.Reference({types: ['Organization']}),
            link: {
                type: 'array',
                items: link()
            },
            active: elements.boolean()
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Person'});
};


module.exports = Person;