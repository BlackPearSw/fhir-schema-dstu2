module.exports = {
    title: 'Quantity',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        value: {$ref: 'decimal'},
        comparator: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'QuantityComparator'}
            ]
        },
        unit: {$ref: 'string'},
        system: {$ref: 'uri'},
        code: {$ref: 'code'}
    }
};