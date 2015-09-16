var Range = function () {
    var schema = {
        title: 'Range',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            low: {$ref: 'SimpleQuantity'},
            high: {$ref: 'SimpleQuantity'}
        }
    };

    return schema;
};

module.exports = Range;