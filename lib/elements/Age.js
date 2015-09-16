var Quantity = require('../elements/Quantity');

var Age = function () {
    var schema = Quantity();
    schema.title = 'Age';

    return schema;
};

module.exports = Age;