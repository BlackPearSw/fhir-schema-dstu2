var formats = require('../formats');
var assertions = require('../assertions');

var Extension = function () {
    var schema = {
        title: 'Extension',
        type: 'object',
        required: ['url'],
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            url: {$ref: 'uri'},
            valueInteger: {$ref: 'integer'},
            valueDecimal: {$ref: 'decimal'},
            valueDateTime: {$ref: 'dateTime'},
            valueDate: {$ref: 'date'},
            valueInstant: {$ref: 'instant'},
            valueString: {$ref: 'string'},
            valueUri: {$ref: 'uri'},
            valueBoolean: {$ref: 'boolean'},
            valueCode: {$ref: 'code'},
            valueMarkdown: {$ref: 'markdown'},
            valueBase64Binary: {$ref: 'base64Binary'},
            valueCoding: {$ref: 'Coding'},
            valueCodeableConcept: {$ref: 'CodeableConcept'}
        },
        format: 'Extension'
    };

    formats['Extension'] = assertions.assert([
        assertions.choice('value', 'value[x] is a choice')
    ]);

    return schema;
};

module.exports = Extension;