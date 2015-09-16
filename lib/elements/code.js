var code = function(options) {
    options = options || {};

    var schema = {
        title: 'code',
        type: 'string',
        pattern: /^[^\s]+([\s]+[^\s]+)*$/
    };

    if (options.codes){
        schema.enum = options.codes;
    }

    return schema;
};

module.exports = code;