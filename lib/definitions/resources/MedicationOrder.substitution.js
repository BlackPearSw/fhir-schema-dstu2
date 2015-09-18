var substitution = {
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

module.exports = substitution;