var Signature = {
    title: 'Signature',
    allOf: [
        {$ref: 'Element'},
        {
            oneOf: [
                {required: ['whoUri']},
                {required: ['whoReference']}
            ]
        }
    ],
    required: ['type', 'when', 'contentType', 'blob'],
    properties: {
        type: {$ref: 'Coding'},
        when: {$ref: 'instant'},
        whoUri: {$ref: 'uri'},
        whoReference: {$ref: 'Reference'},
        contentType: {$ref: 'code'},
        blob: {$ref: 'base64Binary'}
    }
};

module.exports = Signature;