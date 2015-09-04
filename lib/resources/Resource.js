var elements = require('../elements');

var Resource = function(){
    return {
        title: 'FHIR DSTU2 Resource',
        type: 'object',
        required: [],
        properties: {
            id: elements.id(),
            meta: elements.Meta(),
            implicitRules: elements.uri(),
            language: elements.code()
        }
    };
};

module.exports = Resource;