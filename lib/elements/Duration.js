var Quantity = require('../elements/Quantity');

var Duration = function () {
    var schema = Quantity();
    schema.title = 'Duration';

    return schema;
};

module.exports = Duration;