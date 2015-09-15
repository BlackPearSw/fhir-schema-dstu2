var Quantity = require('../elements/Quantity');


var Duration = function () {
    var schema = Quantity();
    schema.title = 'FHIR DSTU2 Duration';

    return schema;
};

module.exports = Duration;