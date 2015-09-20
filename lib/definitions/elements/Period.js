module.exports = {
    title: 'Period',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        start: {$ref: 'dateTime'},
        end: {$ref: 'dateTime'}
    }
};