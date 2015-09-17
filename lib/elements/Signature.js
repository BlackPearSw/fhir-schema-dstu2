var Reference = require('./Reference');
var formats = require('../formats');
var assertions = require('../assertions');

var Signature = function () {
    var schema = {
        title: 'Signature',
        allOf: [
            {$ref: 'Element'}
        ],
        oneOf: [
            {required:['whoUri']},
            {required:['whoReference']}
        ],
        required: ['type', 'when', 'contentType', 'blob'],
        properties: {
            type: {$ref: 'Coding'},
            when: {$ref: 'instant'},
            whoUri: {$ref: 'uri'},
            whoReference: Reference({types:['Practitioner','Patient','RelatedPerson','Device','Organization']}),
            contentType: {$ref: 'code'},
            blob: {$ref: 'base64Binary'}
        },
        format: 'Signature'
    };

    formats['Signature'] = assertions.assert([
        assertions.choice('who', 'who[x] is a choice')
    ]);

    return schema;
};

module.exports = Signature;