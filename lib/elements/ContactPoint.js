var utils = require('../utils');
var code = require('../elements/code');
var string = require('../elements/string');
var Period = require('./Period');

var ContactPoint = function () {
    var schema = {
        title: 'ContactPoint',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            system: code({codes: ['phone', 'fax', 'email', 'url']}),
            value: {$ref: 'string'},
            use: code({codes: ['home', 'work', 'temp', 'old', 'mobile']}),
            period: {$ref: 'Period'}
            //TODO a system is required if value is supplied
        }
    };

    return schema;
};

module.exports = ContactPoint;