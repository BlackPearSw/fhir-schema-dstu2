var utils = require('../utils/index');
var string = require('../elements/string');

var Reference = function (options) {
    var schema = {
        title: 'FHIR DSTU2 Reference',
        properties: {
            reference: string(),
            display: string()
        }
    };
    //TODO: Add validation to particular reference types, if possible
    return utils.factory.makeElement(schema);
};

module.exports = Reference;