var SimpleQuantity = {
    title: 'SimpleQuantity',
    allOf: [
        {$ref: 'Quantity'}
    ],
    not: {
        required: ['comparator']
    }
};

module.exports = SimpleQuantity;