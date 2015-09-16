var Ratio = function () {
    var schema = {
        title: 'Ratio',
        allOf: [
            {$ref: 'Element'}
        ],
        oneOf: [
            {required: ['extension']},
            {required: ['numerator', 'denominator']}
        ],
        properties: {
            numerator: {$ref: 'Quantity'},
            denominator: {$ref: 'Quantity'}
        }
    };

    return schema;
};

module.exports = Ratio;