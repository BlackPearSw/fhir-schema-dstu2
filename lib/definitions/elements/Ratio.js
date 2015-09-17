var Ratio = {
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

module.exports = Ratio;