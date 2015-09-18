var Annotation = {
    title: 'Annotation',
    required: ['text'],
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        authorReference: {$ref: 'Reference'},
        authorString: {$ref: 'string'},
        time: {$ref: 'dateTime'},
        text: {$ref: 'string'}
    },
    format: 'Annotation'
};

module.exports = Annotation;