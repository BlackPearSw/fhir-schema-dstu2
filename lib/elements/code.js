var code = function(options) {
    options = options || {};

    var schema = {
        title: 'FHIR DSTU2 code',
        type: 'string',
        pattern: /^[^\s]+([\s]+[^\s]+)*$/
    };

    if (options.codes){
        schema.enum = options.codes;
    }

    return schema;
};

module.exports = code;