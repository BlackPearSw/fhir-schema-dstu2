var Resource = function(options){
    options = options || {};
    options.resourceType = options.resourceType || 'Resource';

    return {
        title: options.resourceType,
        type: 'object',
        required: ['resourceType'],
        properties: {
            resourceType: {
                type: 'string',
                pattern: new RegExp('^' + options.resourceType + '$')
            },
            id: {$ref: 'id'},
            meta: {$ref: 'Meta'},
            implicitRules: {$ref: 'uri'},
            language: {$ref: 'code'}
        }
    };
};

module.exports = Resource;