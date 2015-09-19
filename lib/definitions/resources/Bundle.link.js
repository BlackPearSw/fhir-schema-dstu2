module.exports = {
    required: ['relation', 'url'],
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        relation: {$ref: 'string'},
        url: {$ref: 'uri'}
    }
};