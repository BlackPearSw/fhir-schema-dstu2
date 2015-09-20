module.exports = {
    title: 'Range',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        low: {$ref: 'SimpleQuantity'},
        high: {$ref: 'SimpleQuantity'}
    }
};