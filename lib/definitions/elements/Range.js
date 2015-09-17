var Range = {
    title: 'Range',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        low: {$ref: 'SimpleQuantity'},
        high: {$ref: 'SimpleQuantity'}
    }
};

module.exports = Range;