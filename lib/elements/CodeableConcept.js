var utils = require('../utils/index');
var assertions = require('../assertions');
var formats = require('../formats');
var string = require('../elements/string');
var Coding = require('./Coding');
var uuid = require('node-uuid');

var CodeableConcept = function (options) {
    options = options || {};

    var schema = {
        title: 'FHIR DSTU2 CodeableConcept',
        properties: {
            coding: {
                type: 'array',
                items: Coding() //TODO: amend - only one of coding.items has to be bound
            },
            text: string()
        }
    };

    if (options.binding){
        var id = schema.title + '|' + uuid.v4();
        schema.format = id;
        formats[id] = assertions.CodeableConcept.isBoundTo(options.binding, 'Must be bound to ' + (options.binding.name || options.binding.system));
    };

    return utils.factory.makeElement(schema);
};

module.exports = CodeableConcept;