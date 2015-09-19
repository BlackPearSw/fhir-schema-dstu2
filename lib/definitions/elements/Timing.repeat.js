var repeat = {
    title: 'Timing.repeat',
    allOf: [
        {$ref: 'Element'},
        {
            oneOf: [
                {required: ['boundsQuantity']},
                {required: ['boundsRange']},
                {required: ['boundsPeriod']},
                {
                    not: {
                        oneOf: [
                            {required: ['boundsQuantity']},
                            {required: ['boundsRange']},
                            {required: ['boundsPeriod']}
                        ]
                    }
                }
            ]
        }
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
    }
};

module.exports = repeat;