module.exports = {
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