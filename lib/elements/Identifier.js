var utils = require('../utils/index');
var code = require('../elements/code');
var string = require('../elements/string');

var Identifier = function () {
    var schema = {
        title: 'FHIR DSTU2 Identifier',
        properties: {
            use: code({codes: ['usual', 'official', 'temp', 'secondary']}),
            system: string(),
            value: string()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Identifier;