module.exports = {
    title: 'SimpleQuantity',
    allOf: [
        {$ref: 'Quantity'}
    ],
    not: {
        required: ['comparator']
    }
};