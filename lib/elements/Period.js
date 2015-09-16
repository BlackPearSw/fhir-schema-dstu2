var Period = function () {
    var schema = {
        title: 'Period',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            start: {$ref: 'dateTime'},
            end: {$ref: 'dateTime'}
        }
    };

    return schema;
};

module.exports = Period;