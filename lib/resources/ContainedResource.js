var utils = require('../utils');
var elements = require('../elements');
var Resource = require('./Resource');
var formats = require('../formats');

//Implied class from specification
var ContainedResource = function () {
    var schema = {
        properties: {
            extension: {
                type: 'array',
                items: elements.Extension()
            },
            modifierExtension: {
                type: 'array',
                items: elements.Extension()
            }
        },
        additionalProperties: true,
        format: 'DSTU2.ContainedResource'
    };

    formats['DSTU2.ContainedResource'] = function(data, schema){
        if (data.meta && data.meta.versionId) return 'contained resource SHALL NOT have meta.versionId';
        if (data.meta && data.meta.lastUpdated) return 'contained resource SHALL NOT have meta.lastUpdated';
        if (data.contained) return 'contained resource SHALL NOT have nested resources';
        if (data.text) return 'contained resource SHALL NOT have narrative';

        return null;
    };

    schema = utils.factory.makeResource(schema, {resourceType: 'ContainedResource'});

    delete schema.properties.resourceType.pattern;
    delete schema.properties.narrative;

    return schema;
};

module.exports = ContainedResource;