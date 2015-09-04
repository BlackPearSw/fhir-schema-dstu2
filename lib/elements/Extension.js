var id = require('../elements/id');
var uri = require('../elements/uri');

//Extension implicitly inherits Element to avoid recursion
var Extension = function(){
    var schema = {
        id: 'Extension',
        title: 'FHIR DSTU2 Extension',
        type: 'object',
        required: [],
        properties: {
            id: id(),
            extension: {
                type: 'array'
            },
            url: uri()
            //TODO: value[x]
        }
    };

    schema.properties.extension.items = { $href: '#Extension'};

    return schema;
};

module.exports = Extension;