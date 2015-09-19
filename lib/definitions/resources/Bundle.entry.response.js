module.exports = {
    required: ['status'],
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        status: {$ref: 'string'},
        location: {$ref: 'uri'},
        etag: {$ref: 'string'},
        lastModified: {$ref: 'instant'}
    }
};