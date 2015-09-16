var tv4 = require('tv4');

function Validator(definitions, format) {

    this.tv4 = require('tv4');

    if (!definitions.title) {
        for (var name in definitions || {}) {
            tv4.addSchema(name, definitions[name])
        }
    }

    for (var name in format || {}) {
        tv4.addFormat(name, format[name]);
    }
}

Validator.prototype.validate = function (data, schema) {
    var checkRecursive = false;
    var banUnknownProperties = true;

    var result = tv4.validateMultiple(data, schema, checkRecursive, banUnknownProperties);

    if (result.missing.length > 0){
        result.valid = false;
    }

    return result;
};

Validator.prototype.reset = function () {
    this.tv4.reset;
};

module.exports = Validator;