var Meta = function () {
    var schema = {
        title: 'Meta',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            versionId: {$ref: 'id'},
            lastUpdated: {$ref: 'instant'},
            profile: {
                type: 'array',
                items: {$ref: 'uri'}
            }
        }
    };

    return schema;
};

module.exports = Meta;