module.exports = {
    title: 'MedicationOrder.dosageInstruction',
    allOf: [
        {$ref: 'BackboneElement'},
        {
            oneOf: [
                {required: ['asNeededBoolean']},
                {required: ['asNeededCodeableConcept']},
                {
                    not: {
                        oneOf: [
                            {required: ['asNeededBoolean']},
                            {required: ['asNeededCodeableConcept']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['siteReference']},
                {required: ['siteCodeableConcept']},
                {
                    not: {
                        oneOf: [
                            {required: ['siteReference']},
                            {required: ['siteCodeableConcept']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['doseRange']},
                {required: ['doseQuantity']},
                {
                    not: {
                        oneOf: [
                            {required: ['doseRange']},
                            {required: ['doseQuantity']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['rateRange']},
                {required: ['rateRatio']},
                {
                    not: {
                        oneOf: [
                            {required: ['rateRange']},
                            {required: ['rateRatio']}
                        ]
                    }
                }
            ]
        }
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
    }
};