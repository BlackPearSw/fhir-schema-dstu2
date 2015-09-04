var utils = require('../utils');
var code = require('../elements/code');
var string = require('../elements/string');

var Narrative = function () {
    var schema = {
        title: 'FHIR DSTU2 Narrative',
        properties: {
            status: code({codes: ['generated', 'extensions', 'additional', 'empty']}),
            div: string()
            //TODO: can we validate xhtml?
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Narrative;