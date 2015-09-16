var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');
var DomainResource = require('./DomainResource');

var dosageInstruction = function () {
    var schema = {
        title: 'MedicationOrder.dosageInstruction',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            text: {$ref: 'string'},
            additionalInstructions: {$ref: 'CodeableConcept'},
            timing: {$ref: 'Timing'},
            asNeededBoolean: {$ref: 'boolean'},
            asNeededCodeableConcept: {$ref: 'CodeableConcept'},
            siteCodeableConcept: {$ref: 'CodeableConcept'},
            siteReference: elements.Reference({types: ['BodySite']}),
            route: {$ref: 'CodeableConcept'},
            method: {$ref: 'CodeableConcept'},
            doseRange: {$ref: 'Range'},
            doseQuantity: {$ref: 'SimpleQuantity'},
            rateRatio: {$ref: 'Ratio'},
            rateRange: {$ref: 'Range'},
            maxDoseForPeriod: {$ref: 'Ratio'}
        },
        format: 'MedicationOrder.dosageInstruction'
    };

    formats['MedicationOrder.dosageInstruction'] = assertions.assert([
        assertions.choice('asNeeded', 'asNeeded[x] is a choice'),
        assertions.choice('site', 'site[x] is a choice'),
        assertions.choice('dose', 'dose[x] is a choice'),
        assertions.choice('rate', 'rate[x] is a choice')
    ]);

    return schema;
};

var dispenseRequest = function () {
    var schema = {
        title: 'MedicationOrder.dispenseRequest',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        properties: {
            medicationCodeableConcept: {$ref: 'CodeableConcept'},
            medicationReference: elements.Reference({types: ['Medication']}),
            validityPeriod: {$ref: 'Period'},
            numberOfRepeatsAllowed: {$ref: 'positiveInt'},
            quantity: {$ref: 'SimpleQuantity'},
            expectedSupplyDuration: {$ref: 'Duration'}
        },
        format: 'MedicationOrder.dispenseRequest'
    };

    formats['MedicationOrder.dispenseRequest'] = assertions.assert([
        assertions.choice('medication', 'medication[x] is a choice')
    ]);

    return schema;
};

var substitution = function () {
    var schema = {
        title: 'MedicationOrder.substitution',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['type'],
        properties: {
            type: {$ref: 'CodeableConcept'},
            reason: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};

var MedicationOrder = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'MedicationOrder'})
        ],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            dateWritten: {$ref: 'dateTime'},
            status: elements.code({codes: registry.valueSets.MedicationOrderStatus.codes}),
            dateEnded: {$ref: 'dateTime'},
            reasonEnded: {$ref: 'CodeableConcept'},
            patient: elements.Reference({types: ['Patient']}),
            prescriber: elements.Reference({types: ['Practitioner']}),
            encounter: elements.Reference({types: ['Encounter']}),
            reasonCodeableConcept: {$ref: 'CodeableConcept'},
            reasonReference: elements.Reference({types: ['Condition']}),
            notes: {$ref: 'string'},
            dosageInstruction: {
                type: 'array',
                items: dosageInstruction()
            },
            dispenseRequest: dispenseRequest(),
            substitution: substitution(),
            priorPrescription: elements.Reference({types: ['MedicationOrder']})
        },
        format: 'MedicationOrder'
    };

    formats['MedicationOrder'] = assertions.assert([
        assertions.choice(['reasonCodeableConcept', 'reasonReference'], 'reason[x] is a choice')
    ]);

    return schema;
};

module.exports = MedicationOrder;