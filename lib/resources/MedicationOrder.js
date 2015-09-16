var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');


var dosageInstruction = function () {
    var schema = {
        title: 'FHIR DSTU2 MedicationOrder.dosageInstruction',
        properties: {
            text: elements.string(),
            additionalInstructions: elements.CodeableConcept(),
            timing: elements.Timing(),
            asNeededBoolean: elements.boolean,
            asNeededCodeableConcept: elements.CodeableConcept(),
            siteCodeableConcept: elements.CodeableConcept(),
            siteReference: elements.Reference({types:['BodySite']}),
            route: elements.CodeableConcept(),
            method: elements.CodeableConcept(),
            doseRange: elements.Range(),
            doseQuantity: elements.SimpleQuantity(),
            rateRatio: elements.Ratio(),
            rateRange: elements.Range(),
            maxDoseForPeriod: elements.Ratio()
        },
        format: 'DSTU2.MedicationOrder.dosageInstruction'
    };

    formats['DSTU2.MedicationOrder.dosageInstruction'] = assertions.assert([
        assertions.choice('asNeeded', 'asNeeded[x] is a choice'),
        assertions.choice('site', 'site[x] is a choice'),
        assertions.choice('dose', 'dose[x] is a choice'),
        assertions.choice('rate', 'rate[x] is a choice')
    ]);

    return utils.factory.makeBackboneElement(schema);
};

var dispenseRequest = function () {
    var schema = {
        title: 'FHIR DSTU2 MedicationOrder.dispenseRequest',
        properties: {
            medicationCodeableConcept: elements.CodeableConcept(),
            medicationReference: elements.Reference({types: ['Medication']}),
            validityPeriod: elements.Period(),
            numberOfRepeatsAllowed: elements.positiveInt(),
            quantity: elements.SimpleQuantity(),
            expectedSupplyDuration: elements.Duration()
        },
        format: 'DSTU2.MedicationOrder.dispenseRequest'
    };

    formats['DSTU2.MedicationOrder.dispenseRequest'] = assertions.assert([
        assertions.choice('medication', 'medication[x] is a choice')
    ]);

    return utils.factory.makeBackboneElement(schema);
};

var substitution = function () {
    var schema = {
        title: 'FHIR DSTU2 MedicationOrder.substitution',
        required: ['type'],
        properties: {
            type: elements.CodeableConcept(),
            reason: elements.CodeableConcept()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var MedicationOrder = function () {
    var schema = {
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            dateWritten: elements.dateTime(),
            status: elements.code({codes: registry.valueSets.MedicationOrderStatus.codes}),
            dateEnded: elements.dateTime(),
            reasonEnded: elements.CodeableConcept(),
            patient: elements.Reference({types: ['Patient']}),
            prescriber: elements.Reference({types: ['Practitioner']}),
            encounter: elements.Reference({types: ['Encounter']}),
            reasonCodeableConcept: elements.CodeableConcept(),
            reasonReference: elements.Reference({types: ['Condition']}),
            notes: elements.string(),
            dosageInstruction: {
                type: 'array',
                items: dosageInstruction()
            },
            dispenseRequest: dispenseRequest(),
            substitution: substitution(),
            priorPrescription: elements.Reference({types: ['MedicationOrder']})
        },
        format: 'DSTU2.MedicationOrder'
    };

    formats['DSTU2.MedicationOrder'] = assertions.assert([
        assertions.choice(['reasonCodeableConcept', 'reasonReference'], 'reason[x] is a choice')
    ]);

    return utils.factory.makeDomainResource(schema, {resourceType: 'MedicationOrder'});
};


module.exports = MedicationOrder;