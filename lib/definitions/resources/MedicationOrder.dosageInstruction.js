var dosageInstruction = {
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
        siteReference: {$ref: 'Reference'},
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

module.exports = dosageInstruction;