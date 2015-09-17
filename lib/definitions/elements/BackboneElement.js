var BackboneElement = {
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


module.exports = BackboneElement;