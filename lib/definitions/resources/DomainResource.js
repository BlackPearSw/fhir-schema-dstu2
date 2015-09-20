module.exports = {
    allOf: [
        {$ref: 'Resource'}
    ],
    properties: {
        text: {$ref: 'Narrative'},
        contained: {
            type: 'array',
            items: {$ref: 'ContainedResource'}
        },
        extension: {
            type: 'array',
            items: {$ref: 'Extension'}
        },
        modifierExtension: {
            type: 'array',
            items: {$ref: 'Extension'}
        }
    }
};