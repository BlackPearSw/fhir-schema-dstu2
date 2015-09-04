var utils = require('../utils');
var elements = require('../elements');
var DomainResource = require('./DomainResource');
var _ = require('lodash');

//DomainResource({resourceType: 'Patient'});

var Patient = function () {
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
            gender: elements.code({codes: ['unknown', 'male', 'female', 'other']}),
            birthDate: elements.date(),
            deceasedBoolean: elements.boolean(),
            deceasedDateTime: elements.dateTime(),
            address: {
                type: 'array',
                items: elements.Address()
            },
            maritalStatus: elements.CodeableConcept(),
            multipleBirthBoolean: elements.boolean(),
            multipleBirthInteger: elements.integer(),
            photo: {
                type: 'array',
                items: elements.Attachment()
            },
            contact: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        relationship: elements.CodeableConcept(),
                        name: elements.HumanName(),
                        telecom: {
                            type: 'array',
                            items: elements.ContactPoint()
                        }
                        ,
                        address: '',
                        gender: elements.code({codes: ['unknown', 'male', 'female', 'other']}),
                        organization: elements.Reference({types: ['Organization']}),
                        period: elements.Period()
                    }
                }
            },
            animal: {
                type: 'object',
                required: ['species'],
                properties: {
                    species: elements.CodeableConcept(),
                    breed: elements.CodeableConcept(),
                    genderStatus: elements.CodeableConcept()
                }
            },
            communication: {
                type: 'array',
                required: ['language'],
                properties: {
                    language: elements.CodeableConcept(),
                    //TODO bind to Language
                    preferred: elements.boolean()
                }
            },
            careProvider: {
                type: 'array',
                items: elements.Reference({types: ['Organization', 'Practitioner']})
            },
            managingOrganization: elements.Reference({types: ['Organization']}),
            link: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['other', 'type'],
                    properties: {
                        other: elements.Reference({types: ['Patient']}),
                        type: elements.code({codes: ['replace', 'refer', 'seealso']})
                    }
                }
            },
            active: elements.boolean()
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Patient'});
};


module.exports = Patient;