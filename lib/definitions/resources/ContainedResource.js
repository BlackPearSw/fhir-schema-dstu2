//Implied class from specification
var ContainedResource = {
    allOf: [
        {$ref: 'Resource'}
    ],
    not: {
        oneOf: [
            {required: ['contained']},
            {required: ['text']},
            {required: ['narrative']}
        ]
    },
    properties: {
        meta: {
            not: {
                oneOf: [
                    {required: ['versionId']},
                    {required: ['lastUpdated']}
                ]
            }
        },
        extension: {
            type: 'array',
            items: {$ref: 'Extension'}
        },
        modifierExtension: {
            type: 'array',
            items: {$ref: 'Extension'}
        }
    },
    additionalProperties: true
};

module.exports = ContainedResource;