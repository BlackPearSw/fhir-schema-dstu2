var dispenseRequest = {
    title: 'MedicationOrder.dispenseRequest',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        medicationCodeableConcept: {$ref: 'CodeableConcept'},
        medicationReference: {$ref: 'Reference'},
        validityPeriod: {$ref: 'Period'},
        numberOfRepeatsAllowed: {$ref: 'positiveInt'},
        quantity: {$ref: 'SimpleQuantity'},
        expectedSupplyDuration: {$ref: 'Duration'}
    },
    format: 'MedicationOrder.dispenseRequest'
};

module.exports = dispenseRequest;