var tv4 = require('tv4');

function Validator(schema, format, options) {
    //TODO: if no schema?
    //TODO: if no format?
    this.schema = schema;
    this.tv4 = require('tv4');
    for (var name in format || {}) {
        tv4.addFormat(name, format[name]);
    }
}

Validator.prototype.validate = function (data) {
    var checkRecursive = false;
    var banUnknownProperties = false;
    return this.tv4.validateMultiple(data, this.schema, checkRecursive, banUnknownProperties);
};

Validator.prototype.reset = function () {
    this.tv4.reset;
};

module.exports = Validator;