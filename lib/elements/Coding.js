var _ = require('lodash');
var utils = require('../utils/index');
var uri = require('../elements/uri');
var code = require('../elements/code');
var string = require('../elements/string');
var boolean = require('../elements/boolean');

var Coding = function(options) {
    options = options || {};

    var schema = {
        title: 'FHIR DSTU2 Coding',
        properties: {
            system: uri(),
            version: string(),
            code: code(),
            display: string(),
            primary: boolean()
        }
    };

    if (options.binding) {
        if (options.binding.system) {
            var regex = new RegExp('^' + options.binding.system + '$');
            schema.properties.system.pattern = regex;
        }

        if (options.binding.codes) {
            schema.properties.code.enum = options.binding.codes;
        }
    }

    return utils.factory.makeElement(schema);
};

module.exports = Coding;