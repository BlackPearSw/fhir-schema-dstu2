var code = require('../elements/code');
var string = require('../elements/string');

var Narrative = function () {
    var schema = {
        title: 'Narrative',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            status: code({codes: ['generated', 'extensions', 'additional', 'empty']}),
            div: {$ref: 'string'}
            //TODO: can we validate xhtml?
        }
    };

    return schema;
};

module.exports = Narrative;