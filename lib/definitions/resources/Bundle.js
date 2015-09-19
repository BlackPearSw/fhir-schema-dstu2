module.exports = {
    required: ['type'],
    allOf: [
        {$ref: 'DomainResource'}
    ],
    properties: {
        resourceType: {
            pattern: '^Bundle$'
        },
        type: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'BundleType'}
            ]
        },
        total: {$ref: 'unsignedInt'},
        link: {
            type: 'array',
            items: {$ref: 'Bundle.link'}
        },
        entry: {
            type: 'array',
            items: {$ref: 'Bundle.entry'}
        },
        signature: {$ref: 'Signature'}
    }
};