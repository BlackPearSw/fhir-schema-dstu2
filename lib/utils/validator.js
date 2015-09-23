var tv4 = require('tv4');
var lib = require('../');
var schema = lib.schema;
var format = lib.formats;

/*
* Configure schemas and formats to use during validation
* schema = object, each property is treated as a schema
* format = object, each property is treated as a tv4 custom format function fn(data, schema) -> null if valid, expectation if not valid
 */
function configure(schema, format) {
    for (var name in schema || {}) {
        var instance = schema[name];
        if (instance.id){
            tv4.addSchema(instance);
        }
        else {
            tv4.addSchema(name, schema[name])
        }
    }

    for (var name in format || {}) {
        tv4.addFormat(name, format[name]);
    }
}

/*
* Validate data against schema
* data = resource to be validated
* schema = schema to validate against
 */
function validate(data, schema) {

    var checkRecursive = false;
    var banUnknownProperties = true;
    var warnings = [];
    tv4.addWarning = function(message){
        warnings.push(message);
    };

    var result = tv4.validateMultiple(data, schema, checkRecursive, banUnknownProperties);

    //Reject data if schema is incomplete
    if (result.missing.length > 0) {
        result.valid = false;
    }

    //Add warnings
    result.warnings = warnings;

    return result;
}

function reset() {
    tv4.reset();
}

configure(schema, format);

module.exports.configure = configure;
module.exports.validate = validate;
module.exports.reset = reset;