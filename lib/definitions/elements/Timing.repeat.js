var repeat = {
    title: 'Timing.repeat',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        boundsQuantity: {$ref: 'Duration'},
        boundsRange: {$ref: 'Range'},
        boundsPeriod: {$ref: 'Period'},
        count: {$ref: 'integer'},
        duration: {$ref: 'decimal'},
        durationMax: {$ref: 'decimal'},
        durationUnits: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'UnitsOfTime'}
            ]
        },
        frequency: {$ref: 'integer'},
        frequencyMax: {$ref: 'integer'},
        period: {$ref: 'decimal'},
        periodUnits: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'UnitsOfTime'}
            ]
        },
        when: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'EventTiming'}
            ]
        }
    },
    format: 'Timing.repeat'
};

//TODO: additional business rules for Timing

module.exports = repeat;