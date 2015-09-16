var elements = require('../elements');

var Resource = function(options){
    return {
        title: 'FHIR DSTU2 ' + options.resourceType,
        type: 'object',
        required: ['resourceType'],
        properties: {
            resourceType: {
                type: 'string',
                pattern: new RegExp('^' + options.resourceType + '$')
            },
            id: elements.id(),
            meta: elements.Meta(),
            implicitRules: elements.uri(),
            language: elements.code()
        },
        additionalProperties: false
    };
};

module.exports = Resource;