module.exports = {
    type: 'object',
    required: ['resourceType'],
    properties: {
        resourceType: {
            type: 'string'
        },
        id: {$ref: 'id'},
        meta: {$ref: 'Meta'},
        implicitRules: {$ref: 'uri'},
        language: {$ref: 'code'}
    }
};