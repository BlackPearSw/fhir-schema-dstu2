module.exports = {
    required: [],
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        mode: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'SearchEntryMode'}
            ]
        },
        score: {
            allOf: [
                {$ref: 'decimal'},
                {
                    minimum: 0,
                    maximum: 1
                }
            ]
        }
    }
};