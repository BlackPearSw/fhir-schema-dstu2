var code = require('../elements/code');
var registry = require('../registry');

var Quantity = function () {
    var schema = {
        title: 'Quantity',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            value: {$ref: 'decimal'},
            comparator: code({codes: registry.valueSets.QuantityComparator.codes}),
            unit: {$ref: 'string'},
            system: {$ref: 'uri'},
            code: {$ref: 'code'}
        }
    };

    return schema;
};

module.exports = Quantity;