module.exports = {
    title: 'Timing',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        event: {
            type: 'array',
            items: {$ref: 'dateTime'}
        },
        repeat: {$ref: 'Timing.repeat'},
        code: {$ref: 'CodeableConcept'}
    }
};