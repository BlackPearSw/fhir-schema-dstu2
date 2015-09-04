var utils = require('../utils/index');
var code = require('../elements/code');
var string = require('../elements/string');
var Period = require('./Period');

var Address = function(){
    var schema = {
        title: 'FHIR DSTU2 Address',
        properties: {
            use: code({codes: ['home', 'work', 'temp', 'old']}),
            system: code({codes: ['phone', 'fax', 'email', 'url']}),
            text: string(),
            line: {
                type: 'array',
                items: string()
            },
            city: string(),
            state: string(),
            postalCode: string(),
            country: string(),
            period: Period()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Address;