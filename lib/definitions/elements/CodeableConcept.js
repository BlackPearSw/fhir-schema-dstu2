module.exports = {
    title: 'CodeableConcept',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        coding: {
            type: 'array',
            items: {$ref: 'Coding'}
        },
        text: {$ref: 'string'}
    }
};