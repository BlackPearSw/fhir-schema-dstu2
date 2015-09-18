var MedicationOrder = {
    allOf: [
        {$ref: 'DomainResource'}
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
        dosageInstruction: {
            type: 'array',
            items: {$ref: 'MedicationOrder.dosageInstruction'}
        },
        dispenseRequest: {$ref: 'MedicationOrder.dispenseRequest'},
        substitution: {$ref: 'MedicationOrder.substitution'},
        priorPrescription: {$ref: 'Reference'},
    },
    format: 'MedicationOrder'
};

module.exports = MedicationOrder;