module.exports = {
    title: 'MedicationOrder.dispenseRequest',
    allOf: [
        {$ref: 'BackboneElement'},
        {
            oneOf: [
                {required: ['medicationReference']},
                {required: ['medicationCodeableConcept']},
                {
                    not: {
                        oneOf: [
                            {required: ['medicationReference']},
                            {required: ['medicationCodeableConcept']}
                        ]
                    }
                }
            ]
        }
    ],
    properties: {
        medicationCodeableConcept: {$ref: 'CodeableConcept'},
        medicationReference: {$ref: 'Reference'},
        validityPeriod: {$ref: 'Period'},
        numberOfRepeatsAllowed: {$ref: 'positiveInt'},
        quantity: {$ref: 'SimpleQuantity'},
        expectedSupplyDuration: {$ref: 'Duration'}
    }
};