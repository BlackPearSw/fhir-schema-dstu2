var code = require('./code');
var uri = require('./uri');

var Coding = function(options) {
    options = options || {};

    var schema = {
        title: 'Coding',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            system: {$ref: 'uri'},
            version: {$ref: 'string'},
            code: {$ref: 'code'},
            display: {$ref: 'string'},
            primary: {$ref: 'boolean'}
        }
    };

    if (options.binding) {
        if (options.binding.system) {
            var regex = new RegExp('^' + options.binding.system + '$');
            schema.properties.system = uri();
            schema.properties.system.pattern = regex;
        }

        if (options.binding.codes) {
            schema.properties.code = code(options.binding);
        }
    }

    return schema;
};

module.exports = Coding;