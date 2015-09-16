var Quantity = require('../elements/Quantity');

var SimpleQuantity = function () {
    var schema = Quantity();
    schema.title = 'SimpleQuantity';
    delete schema.properties.comparator;

    return schema;
};

module.exports = SimpleQuantity;