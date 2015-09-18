var Meta = {
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

module.exports = Meta;