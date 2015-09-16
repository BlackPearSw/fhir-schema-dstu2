var utils = require('../utils');
var elements = require('../elements');
var Resource = require('./Resource');
var ContainedResource = require('./ContainedResource');

var DomainResource = function (options) {
    options = options || {};
    if (!options.resourceType) {
        throw new Error('options.resourceType undefined');
    }

    var schema = {
        title: 'FHIR DSTU2 ' + options.resourceType,
        properties: {
            text: elements.Narrative(),
            contained: {
                type: 'array',
                items: ContainedResource()
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

    return utils.factory.makeResource(schema, {resourceType: options.resourceType});
};


module.exports = DomainResource;