var code = require('../elements/code');
var string = require('../elements/string');

var Identifier = function () {
    var schema = {
        title: 'Identifier',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            use: code({codes: ['usual', 'official', 'temp', 'secondary']}),
            system: {$ref: 'string'},
            value: {$ref: 'string'}
        }
    };

    return schema;
};

module.exports = Identifier;