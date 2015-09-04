var utils = require('../utils');
var code = require('../elements/code');
var string = require('../elements/string');
var Period = require('./Period');

var ContactPoint = function () {
    var schema = {
        title: 'FHIR DSTU2 ContactPoint',
        properties: {
            system: code({codes: ['phone', 'fax', 'email', 'url']}),
            value: string(),
            use: code({codes: ['home', 'work', 'temp', 'old', 'mobile']}),
            period: Period()
            //TODO a system is required if value is supplied
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = ContactPoint;