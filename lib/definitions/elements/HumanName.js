var HumanName = {
    title: 'HumanName',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        use: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'NameUse'}
            ]
        },
        text: {$ref: 'string'},
        family: {
            type: 'array',
            items: {$ref: 'string'}
        },
        given: {
            type: 'array',
            items: {$ref: 'string'}
        },
        prefix: {
            type: 'array',
            items: {$ref: 'string'}
        },
        suffix: {
            type: 'array',
            items: {$ref: 'string'}
        },
        period: {$ref: 'Period'}
    }
};

module.exports = HumanName;
