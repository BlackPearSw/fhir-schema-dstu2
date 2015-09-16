var Element = function () {
    return {
        title: 'Element',
        type: 'object',
        required: [],
        properties: {
            id: {$ref: 'id'},
            extension: {
                type: 'array',
                items: {$ref: 'Extension'}
            }
        }
    }
};

module.exports = Element;