var string = require('../elements/string');

var Reference = function (options) {
    var schema = {
        title: 'Reference',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            reference: {$ref: 'string'},
            display: {$ref: 'string'}
        }
    };
    //TODO: Add validation to particular reference types, if possible
    return schema;
};

module.exports = Reference;