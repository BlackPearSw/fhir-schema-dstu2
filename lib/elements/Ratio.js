var utils = require('../utils/index');
var Quantity = require('../elements/Quantity');

var Ratio = function () {
    var schema = {
        title: 'FHIR DSTU2 Ratio',
        oneOf: [
            {required: ['extension']},
            {required: ['numerator', 'denominator']}
        ],
        properties: {
            numerator: Quantity(),
            denominator: Quantity()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Ratio;