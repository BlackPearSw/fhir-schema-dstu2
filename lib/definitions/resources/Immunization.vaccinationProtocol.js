module.exports = {
    title: 'Immunization.vaccinationProtocol',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['doseSequence', 'targetDisease', 'doseStatus'],
    properties: {
        doseSequence: {$ref: 'positiveInt'},
        description: {$ref: 'string'},
        authority: {$ref: 'Reference'},
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