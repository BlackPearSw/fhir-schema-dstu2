module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    properties: {
        resourceType: {
            pattern: '^Organization$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        active: {$ref: 'boolean'},
        type: {$ref: 'CodeableConcept'},
        name: {$ref: 'string'},
        telecom: {
            type: 'array',
            items: {$ref: 'ContactPoint'}
        },
        address: {
            type: 'array',
            items: {$ref: 'Address'}
        },
        partOf: {$ref: 'Reference'},
        contact: {
            type: 'array',
            items: {$ref: 'Organization.contact'}
        }
    }
};