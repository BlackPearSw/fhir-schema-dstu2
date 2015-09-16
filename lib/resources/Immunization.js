var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');

var explanation = function () {
    var schema = {
        title: 'FHIR DSTU2 Immunization.explanation',
        properties: {
            reason: elements.CodeableConcept(),
            reasonNotGiven: elements.CodeableConcept()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var reaction = function () {
    var schema = {
        title: 'FHIR DSTU2 Immunization.reaction',
        properties: {
            date: elements.dateTime(),
            detail: elements.Reference({types: 'Observation'}),
            reported: elements.boolean()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var vaccinationProtocol = function () {
    var schema = {
        title: 'FHIR DSTU2 Immunization.vaccinationProtocol',
        required: ['doseSequence', 'targetDisease', 'doseStatus'],
        properties: {
            doseSequence: elements.positiveInt(),
            description: elements.string(),
            authority: elements.Reference({types:['Organization']}),
            series: elements.string(),
            seriesDoses: elements.positiveInt(),
            targetDisease: {
                type: 'array',
                items: elements.CodeableConcept(),
                minItems: 1
            },
            doseStatus: elements.CodeableConcept(),
            doseStatusReason: elements.CodeableConcept()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var Immunization = function () {
    var schema = {
        required: ['status', 'vaccineCode', 'patient', 'wasNotGiven', 'reported'],
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            status: elements.code({codes: registry.valueSets.MedicationAdministrationStatus.codes}),
            date: elements.dateTime(),
            vaccineCode: elements.CodeableConcept(),
            patient: elements.Reference({types: ['Patient']}),
            wasNotGiven: elements.boolean(),
            reported: elements.boolean(),
            performer: elements.Reference({types: ['Practitioner']}),
            requestor: elements.Reference({types: ['Practitioner']}),
            encounter: elements.Reference({types: ['Encounter']}),
            manufacturer: elements.Reference({types: ['Organization']}),
            location: elements.Reference({types: ['Location']}),
            lotNumber: elements.string(),
            expirationDate: elements.date(),
            site: elements.CodeableConcept(),
            route: elements.CodeableConcept(),
            doseQuantity: elements.SimpleQuantity(),
            note: {
                type: 'array',
                items: elements.Annotation()
            },
            explanation: explanation(),
            reaction: {
                type: 'array',
                items: reaction()
            },
            vaccinationProtocol: {
                type: 'array',
                items: vaccinationProtocol()
            }
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Immunization'});
};


module.exports = Immunization;