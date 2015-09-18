var stage = {
    title: 'Condition.stage',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    oneOf: [
        {
            required: ['summary']
        },
        {
            required: ['assessment']
        }
    ],
    properties: {
        summary: {$ref: 'CodeableConcept'},
        assessment: {$ref: 'Reference'}
    }
};

module.exports = stage;