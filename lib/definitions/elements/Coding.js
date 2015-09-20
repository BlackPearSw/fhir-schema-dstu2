module.exports = {
    title: 'Coding',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        system: {$ref: 'uri'},
        version: {$ref: 'string'},
        code: {$ref: 'code'},
        display: {$ref: 'string'},
        primary: {$ref: 'boolean'}
    }
};