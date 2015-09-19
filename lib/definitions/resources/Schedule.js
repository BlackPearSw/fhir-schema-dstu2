module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    required: ['actor'],
    properties: {
        resourceType: {
            pattern: '^Schedule$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        type: {
            type: 'array',
            items: {$ref: 'CodeableConcept'}
        },
        actor: {$ref: 'Reference'},
        planningHorizon: {$ref: 'Period'},
        comment: {$ref: 'string'}
    }
};