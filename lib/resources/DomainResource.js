var Resource = require('./Resource');
var ContainedResource = require('./ContainedResource');

var DomainResource = function (options) {
    options = options || {};
    options.resourceType = options.resourceType || '\w';

    var schema = {
        title: '' + options.resourceType,
        allOf: [
            Resource(options)
        ],
        properties: {
            text: {$ref: 'Narrative'},
            contained: {
                type: 'array',
                items: ContainedResource()
            },
            extension: {
                type: 'array',
                items: {$ref: 'Extension'}
            },
            modifierExtension: {
                type: 'array',
                items: {$ref: 'Extension'}
            }
        }
    };

    return schema;
};

module.exports = DomainResource;