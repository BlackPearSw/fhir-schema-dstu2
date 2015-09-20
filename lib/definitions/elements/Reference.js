module.exports = {
    title: 'Reference',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        reference: {$ref: 'string'},
        display: {$ref: 'string'}
    }
};