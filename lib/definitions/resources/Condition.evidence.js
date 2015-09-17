var evidence = {
    title: 'Condition.evidence',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    oneOf: [
        {
            required: ['code']
        },
        {
            required: ['detail']
        }
    ],
    properties: {
        code: {$ref: 'CodeableConcept'},
        detail: {$ref: 'Reference'}
    }
};

module.exports = evidence;