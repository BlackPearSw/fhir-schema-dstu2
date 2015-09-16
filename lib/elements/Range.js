var utils = require('../utils/index');
var simpleQuantity = require('../elements/simpleQuantity');

var Range = function () {
    var schema = {
        title: 'FHIR DSTU2 Range',
        properties: {
            low: simpleQuantity(),
            high: simpleQuantity()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Range;