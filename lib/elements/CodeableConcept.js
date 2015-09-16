var assertions = require('../assertions');
var formats = require('../formats');
var string = require('../elements/string');
var Coding = require('./Coding');
var uuid = require('node-uuid');

var CodeableConcept = function (options) {
    options = options || {};

    var schema = {
        title: 'CodeableConcept',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            coding: {
                type: 'array',
                items: Coding() //TODO: amend - only one of coding.items has to be bound
            },
            text: {$ref: 'string'}
        }
    };

    if (options.binding){
        var id = schema.title + '|' + uuid.v4();
        schema.format = id;
        formats[id] = assertions.CodeableConcept.isBoundTo(options.binding, 'Must be bound to ' + (options.binding.name || options.binding.system));
    }

    return schema;
};

module.exports = CodeableConcept;