var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');
var DomainResource = require('./DomainResource');

var contact = function () {
    var schema = {
        title: 'Patient.contact',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            relationship: {$ref: 'CodeableConcept'},
            name: {$ref: 'HumanName'},
            telecom: {
                type: 'array',
                items: {$ref: 'ContactPoint'}
            },
            address: {$ref: 'Address'},
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            organization: elements.Reference({types: ['Organization']}),
            period: {$ref: 'Period'}
        }
    };

    return schema;
};

var animal = function () {
    var schema = {
        title: 'Patient.animal',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['species'],
        properties: {
            species: {$ref: 'CodeableConcept'},
            breed: {$ref: 'CodeableConcept'},
            genderStatus: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};

var communication = function () {
    var schema = {
        title: 'Patient.communication',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['language'],
        properties: {
            language: {$ref: 'CodeableConcept'},
            //TODO bind to Language
            preferred: {$ref: 'boolean'}
        }
    };

    return schema;
};

var link = function () {
    var schema = {
        title: 'Patient.link',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['other', 'type'],
        properties: {
            other: elements.Reference({types: ['Patient']}),
            type: elements.code({codes: ['replace', 'refer', 'seealso']})
        }
    };

    return schema;
};

var Patient = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'Patient'})
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
            deceasedBoolean: {$ref: 'boolean'},
            deceasedDateTime: {$ref: 'dateTime'},
            address: {
                type: 'array',
                items: {$ref: 'Address'}
            },
            maritalStatus: {$ref: 'CodeableConcept'},
            multipleBirthBoolean: {$ref: 'boolean'},
            multipleBirthInteger: {$ref: 'integer'},
            photo: {
                type: 'array',
                items: {$ref: 'Attachment'}
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
            active: {$ref: 'boolean'}
        },
        format: 'Patient'
    };

    formats['Patient'] = assertions.assert([
        assertions.choice('deceased', 'deceased[x] is a choice'),
        assertions.choice('multipleBirth', 'multipleBirth[x] is a choice')
    ]);

    return schema;
};


module.exports = Patient;