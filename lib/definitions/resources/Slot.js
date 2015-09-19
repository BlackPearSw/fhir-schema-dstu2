module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    required: ['schedule', 'freeBusyType', 'start', 'end'],
    properties: {
        resourceType: {
            pattern: '^Slot$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        type: {$ref: 'CodeableConcept'},
        schedule: {$ref: 'Reference'},
        freeBusyType: {
            allOf: [
                {$ref: 'code'}
            ]
        },
        start: {$ref: 'instant'},
        end: {$ref: 'instant'},
        overbooked: {$ref: 'boolean'},
        comment: {$ref: 'string'}
    }
};