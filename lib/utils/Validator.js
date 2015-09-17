var tv4 = require('tv4');

function Validator(schema, format) {

    this.tv4 = require('tv4');

    if (!schema.title) {
        for (var name in schema || {}) {
            tv4.addSchema(name, schema[name])
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

    //Reject data if schema is incomplete
    if (result.missing.length > 0){
        result.valid = false;
    }

    return result;
};

module.exports = Validator;