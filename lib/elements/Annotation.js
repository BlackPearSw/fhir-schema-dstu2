var utils = require('../utils/index');
var code = require('./code');
var string = require('./string');
var boolean = require('./boolean');
var Reference = require('./Reference');
var dateTime = require('./dateTime');
var formats = require('../formats');
var assertions = require('../assertions');

var Annotation = function() {
    var schema = {
        title: 'FHIR DSTU2 Annotation',
        required: ['text'],
        properties: {
            authorReference: Reference({types:['Practitioner','Patient','RelatedPerson']}),
            authorString: string(),
            time: dateTime(),
            text: string()
        },
        format: 'DSTU2.Annotation'
    };

    formats['DSTU2.Annotation'] = assertions.assert([
        assertions.choice('author', 'author[x] is a choice')
    ]);

    return utils.factory.makeElement(schema);
};

module.exports = Annotation;