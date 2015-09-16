var code = require('./code');
var string = require('./string');
var Period = require('./Period');

var Address = function(){
    var schema = {
        title: 'Address',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            use: code({codes: ['home', 'work', 'temp', 'old']}),
            system: code({codes: ['phone', 'fax', 'email', 'url']}),
            text: {$ref: 'string'},
            line: {
                type: 'array',
                items: {$ref: 'string'}
            },
            city: {$ref: 'string'},
            state: {$ref: 'string'},
            postalCode: {$ref: 'string'},
            country: {$ref: 'string'},
            period: {$ref: 'Period'}
        }
    };

    return schema;
};

module.exports = Address;