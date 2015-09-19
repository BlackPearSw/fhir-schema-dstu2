module.exports = {
    required: ['method', 'url'],
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        method: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'HTTPVerb'}
            ]
        },
        url: {$ref: 'uri'},
        ifNoneMatch: {$ref: 'string'},
        ifModifiedSince: {$ref: 'instant'},
        ifMatch: {$ref: 'string'},
        ifNoneExist: {$ref: 'string'}
    }
};