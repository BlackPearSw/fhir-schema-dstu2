var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');

var contact = function () {
    var schema = {
        title: 'FHIR DSTU2 Patient.contact',
        properties: {
            relationship: elements.CodeableConcept(),
            name: elements.HumanName(),
            telecom: {
                type: 'array',
                items: elements.ContactPoint()
            },
            address: elements.Address(),
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            organization: elements.Reference({types: ['Organization']}),
            period: elements.Period()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var animal = function () {
    var schema = {
        title: 'FHIR DSTU2 Patient.animal',
        required: ['species'],
        properties: {
            species: elements.CodeableConcept(),
            breed: elements.CodeableConcept(),
            genderStatus: elements.CodeableConcept()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var communication = function () {
    var schema = {
        title: 'FHIR DSTU2 Patient.communication',
        required: ['language'],
        properties: {
            language: elements.CodeableConcept(),
            //TODO bind to Language
            preferred: elements.boolean()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var link = function () {
    var schema = {
        title: 'FHIR DSTU2 Patient.link',
        required: ['other', 'type'],
        properties: {
            other: elements.Reference({types: ['Patient']}),
            type: elements.code({codes: ['replace', 'refer', 'seealso']})
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

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
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
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
                items: contact()
            },
            animal: animal(),
            communication: communication(),
            careProvider: {
                type: 'array',
                items: elements.Reference({types: ['Organization', 'Practitioner']})
            },
            managingOrganization: elements.Reference({types: ['Organization']}),
            link: {
                type: 'array',
                items: link()
            },
            active: elements.boolean()
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Patient'});
};


module.exports = Patient;