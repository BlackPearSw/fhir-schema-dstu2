var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');
var DomainResource = require('./DomainResource');

var explanation = function () {
    var schema = {
        title: 'Immunization.explanation',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            reason: {$ref: 'CodeableConcept'},
            reasonNotGiven: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};

var reaction = function () {
    var schema = {
        title: 'Immunization.reaction',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            date: {$ref: 'dateTime'},
            detail: elements.Reference({types: 'Observation'}),
            reported: {$ref: 'boolean'}
        }
    };

    return schema;
};

var vaccinationProtocol = function () {
    var schema = {
        title: 'Immunization.vaccinationProtocol',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['doseSequence', 'targetDisease', 'doseStatus'],
        properties: {
            doseSequence: {$ref: 'positiveInt'},
            description: {$ref: 'string'},
            authority: elements.Reference({types: ['Organization']}),
            series: {$ref: 'string'},
            seriesDoses: {$ref: 'positiveInt'},
            targetDisease: {
                type: 'array',
                items: {$ref: 'CodeableConcept'},
                minItems: 1
            },
            doseStatus: {$ref: 'CodeableConcept'},
            doseStatusReason: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};

var Immunization = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'Immunization'})
        ],
        required: ['status', 'vaccineCode', 'patient', 'wasNotGiven', 'reported'],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            status: elements.code({codes: registry.valueSets.MedicationAdministrationStatus.codes}),
            date: {$ref: 'dateTime'},
            vaccineCode: {$ref: 'CodeableConcept'},
            patient: elements.Reference({types: ['Patient']}),
            wasNotGiven: {$ref: 'boolean'},
            reported: {$ref: 'boolean'},
            performer: elements.Reference({types: ['Practitioner']}),
            requestor: elements.Reference({types: ['Practitioner']}),
            encounter: elements.Reference({types: ['Encounter']}),
            manufacturer: elements.Reference({types: ['Organization']}),
            location: elements.Reference({types: ['Location']}),
            lotNumber: {$ref: 'string'},
            expirationDate: {$ref: 'date'},
            site: {$ref: 'CodeableConcept'},
            route: {$ref: 'CodeableConcept'},
            doseQuantity: {$ref: 'SimpleQuantity'},
            note: {
                type: 'array',
                items: {$ref: 'Annotation'}
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

    return schema;
};


module.exports = Immunization;