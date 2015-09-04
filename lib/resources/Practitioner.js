var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');

var practitionerRole = function(){
    var schema = {
        title: 'FHIR DSTU2 Practitioner.practitionerRole',
        properties: {
            managingOrganization: elements.Reference({types: ['Organization']}),
            role: elements.CodeableConcept(),
            specialty: elements.CodeableConcept(),
            period: elements.Period(),
            location: elements.Reference({types: ['Organization']}),
            healthcareService: elements.Reference({types: ['HealthcareService']})
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var qualification = function(){
    var schema = {
        title: 'FHIR DSTU2 Practitioner.qualification',
        required: ['code'],
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            code: elements.CodeableConcept(),
            period: elements.Period(),
            issuer: elements.Reference({types: ['Organization']})
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var Practitioner = function () {
    var schema = {
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            active: elements.boolean(),
            name: elements.HumanName(),
            telecom: {
                type: 'array',
                items: elements.ContactPoint()
            },
            address: {
                type: 'array',
                items: elements.Address()
            },
            gender: elements.code({codes: registry.valueSets.AdministrativeGender.codes}),
            birthDate: elements.date(),
            photo: {
                type: 'array',
                items: elements.Attachment()
            },
            practitionerRole: {
                type: 'array',
                items: practitionerRole()
            },
            qualification: {
                type: 'array',
                items: qualification()
            },
            communication: elements.CodeableConcept()
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Practitioner'});
};


module.exports = Practitioner;