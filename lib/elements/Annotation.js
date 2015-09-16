var code = require('./code');
var string = require('./string');
var boolean = require('./boolean');
var Reference = require('./Reference');
var dateTime = require('./dateTime');
var formats = require('../formats');
var assertions = require('../assertions');

var Annotation = function() {
    var schema = {
        title: 'Annotation',
        required: ['text'],
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            authorReference: Reference({types:['Practitioner','Patient','RelatedPerson']}),
            authorString: {$ref: 'string'},
            time: {$ref: 'dateTime'},
            text: {$ref: 'string'}
        },
        format: 'Annotation'
    };

    formats['Annotation'] = assertions.assert([
        assertions.choice('author', 'author[x] is a choice')
    ]);

    return schema;
};

module.exports = Annotation;