var utils = require('../utils/index');
var code = require('../elements/code');
var string = require('../elements/string');
var Period = require('./Period');

var HumanName = function () {
    var schema = {
        title: 'FHIR DSTU2 HumanName',
        properties: {
            use: code({codes: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden']}),
            text: string(),
            family: {
                type: 'array',
                items: string()
            },
            given: {
                type: 'array',
                items: string()
            },
            prefix: {
                type: 'array',
                items: string()
            },
            suffix: {
                type: 'array',
                items: string()
            },
            period: Period()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = HumanName;
