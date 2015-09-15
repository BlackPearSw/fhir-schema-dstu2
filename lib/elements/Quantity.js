var utils = require('../utils/index');
var decimal = require('../elements/decimal');
var code = require('../elements/code');
var registry = require('../registry');
var string = require('../elements/string');
var uri = require('../elements/uri');

var Quantity = function () {
    var schema = {
        title: 'FHIR DSTU2 Quantity',
        properties: {
            value: decimal(),
            comparator: code({codes: registry.valueSets.QuantityComparator.codes}),
            unit: string(),
            system: uri(),
            code: code()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Quantity;