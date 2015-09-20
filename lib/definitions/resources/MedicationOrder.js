module.exports = {
    allOf: [
        {$ref: 'DomainResource'},
        {
            oneOf: [
                {required: ['reasonReference']},
                {required: ['reasonCodeableConcept']},
                {
                    not: {
                        oneOf: [
                            {required: ['reasonReference']},
                            {required: ['reasonCodeableConcept']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['medicationReference']},
                {required: ['medicationCodeableConcept']}
            ]
        }
    ],
    properties: {
        resourceType: {
            type: 'string',
            pattern: '^MedicationOrder$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        dateWritten: {$ref: 'dateTime'},
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'MedicationOrderStatus'}
            ]
        },
        dateEnded: {$ref: 'dateTime'},
        reasonEnded: {$ref: 'CodeableConcept'},
        patient: {$ref: 'Reference'},
        prescriber: {$ref: 'Reference'},
        encounter: {$ref: 'Reference'},
        reasonCodeableConcept: {$ref: 'CodeableConcept'},
        reasonReference: {$ref: 'Reference'},
        notes: {$ref: 'string'},
        medicationCodeableConcept: {$ref: 'CodeableConcept'},
        medicationReference: {$ref: 'Reference'},
        dosageInstruction: {
            type: 'array',
            items: {$ref: 'MedicationOrder.dosageInstruction'}
        },
        dispenseRequest: {$ref: 'MedicationOrder.dispenseRequest'},
        substitution: {$ref: 'MedicationOrder.substitution'},
        priorPrescription: {$ref: 'Reference'}
    }
};