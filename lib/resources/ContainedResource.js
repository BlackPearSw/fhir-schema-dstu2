var utils = require('../utils');
var elements = require('../elements');
var Resource = require('./Resource');
var formats = require('../formats');

//Implied class from specification
var ContainedResource = function () {
    var schema = {
        allOf: [
            Resource({resourceType:'ContainedResource'})
        ],
        properties: {
            extension: {
                type: 'array',
                items: {$ref: 'Extension'}
            },
            modifierExtension: {
                type: 'array',
                items: {$ref: 'Extension'}
            }
        },
        additionalProperties: true,
        format: 'ContainedResource'
    };

    formats['ContainedResource'] = function(data, schema){
        if (data.meta && data.meta.versionId) return 'contained resource SHALL NOT have meta.versionId';
        if (data.meta && data.meta.lastUpdated) return 'contained resource SHALL NOT have meta.lastUpdated';
        if (data.contained) return 'contained resource SHALL NOT have nested resources';
        if (data.text) return 'contained resource SHALL NOT have narrative';

        return null;
    };

    delete schema.allOf[0].properties.resourceType.pattern;
    delete schema.allOf[0].properties.narrative;

    return schema;
};

module.exports = ContainedResource;