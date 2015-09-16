var Quantity = require('../elements/Quantity');


var SimpleQuantity = function () {
    var schema = Quantity();
    schema.title = 'FHIR DSTU2 SimpleQuantity';
    delete schema.properties.comparator;

    return schema;
};

module.exports = SimpleQuantity;