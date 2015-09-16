var BackboneElement = function() {
    var schema = {
        title: 'BackboneElement',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            modifierExtension: {
                type: 'array',
                items: {$ref: 'Extension'}
            }
        }
    };

    return schema;
};

module.exports = BackboneElement;