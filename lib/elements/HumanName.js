var code = require('../elements/code');
var string = require('../elements/string');

var HumanName = function () {
    var schema = {
        title: 'HumanName',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            use: code({codes: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden']}),
            text: string(),
            family: {
                type: 'array',
                items: {$ref: 'string'}
            },
            given: {
                type: 'array',
                items: {$ref: 'string'}
            },
            prefix: {
                type: 'array',
                items: {$ref: 'string'}
            },
            suffix: {
                type: 'array',
                items: {$ref: 'string'}
            },
            period: {$ref: 'Period'}
        }
    };

    return schema;
};

module.exports = HumanName;
