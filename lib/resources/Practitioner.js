var elements = require('../elements');
var registry = require('../registry');
var DomainResource = require('./DomainResource');

var practitionerRole = function(){
    var schema = {
        title: 'Practitioner.practitionerRole',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            managingOrganization: elements.Reference({types: ['Organization']}),
            role: {$ref: 'CodeableConcept'},
            specialty: {$ref: 'CodeableConcept'},
            period: {$ref: 'Period'},
            location: elements.Reference({types: ['Organization']}),
            healthcareService: elements.Reference({types: ['HealthcareService']})
        }
    };

    return schema;
};

var qualification = function(){
    var schema = {
        title: 'Practitioner.qualification',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['code'],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            code: {$ref: 'CodeableConcept'},
            period: {$ref: 'Period'},
            issuer: elements.Reference({types: ['Organization']})
        }
    };

    return schema;
};

var Practitioner = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'Practitioner'})
        ],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            active: {$ref: 'boolean'},
            name: {$ref: 'HumanName'},
            telecom: {
                type: 'array',
                items: {$ref: 'ContactPoint'}
            },
            address: {
                type: 'array',
                items: {$ref: 'Address'}
            },
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            birthDate: {$ref: 'date'},
            photo: {
                type: 'array',
                items: {$ref: 'Attachment'}
            },
            practitionerRole: {
                type: 'array',
                items: practitionerRole()
            },
            qualification: {
                type: 'array',
                items: qualification()
            },
            communication: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};


module.exports = Practitioner;