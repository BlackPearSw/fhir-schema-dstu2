module.exports = {
    title: 'Practitioner.qualification',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['code'],
    properties: {
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        code: {$ref: 'CodeableConcept'},
        period: {$ref: 'Period'},
        issuer: {$ref: 'Reference'}
    }
};