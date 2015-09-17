var Address = {
    title: 'Address',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        use: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AddressUse'}
            ]
        },
        text: {$ref: 'string'},
        line: {
            type: 'array',
            items: {$ref: 'string'}
        },
        city: {$ref: 'string'},
        state: {$ref: 'string'},
        postalCode: {$ref: 'string'},
        country: {$ref: 'string'},
        period: {$ref: 'Period'}
    }
};

module.exports = Address;