var Quantity = require('../elements/Quantity');


var Age = function () {
    var schema = Quantity();
    schema.title = 'FHIR DSTU2 Age';

    return schema;
};

module.exports = Age;