module.exports = {
    title: 'Identifier',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        use: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'IdentifierUse'}
            ]
        },
        system: {$ref: 'string'},
        value: {$ref: 'string'}
    }
};