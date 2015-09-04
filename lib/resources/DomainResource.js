var utils = require('../utils');
var elements = require('../elements');
var Resource = require('./Resource');

var DomainResource = function (options) {
    options = options || {};
    if (!options.resourceType) {
        throw new Error('options.resourceType undefined');
    }

    var schema = {
        title: 'FHIR DSTU2 ' + options.resourceType,
        required: ['resourceType'],
        properties: {
            resourceType: {
                type: 'string',
                pattern: new RegExp('^' + options.resourceType + '$')
            },
            text: elements.Narrative(),
            contained: {
                type: 'array',
                items: Resource()
            },
            extension: {
                type: 'array',
                items: elements.Extension()
            },
            modifierExtension: {
                type: 'array',
                items: elements.Extension()
            }
        }
    };

    return utils.factory.makeResource(schema);
};


module.exports = DomainResource;