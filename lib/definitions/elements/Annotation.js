module.exports = {
    title: 'Annotation',
    required: ['text'],
    allOf: [
        {$ref: 'Element'},
        {
            oneOf: [
                {required: ['authorReference']},
                {required: ['authorString']},
                {
                    not: {
                        oneOf: [
                            {required: ['authorReference']},
                            {required: ['authorString']}
                        ]
                    }
                }
            ]
        }
    ],
    properties: {
        authorReference: {$ref: 'Reference'},
        authorString: {$ref: 'string'},
        time: {$ref: 'dateTime'},
        text: {$ref: 'string'}
    }
};