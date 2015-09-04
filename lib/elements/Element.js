var id = require('../elements/id');
var Extension = require('./Extension');

var Element = function () {
    return {
        title: 'FHIR DSTU2 Element',
        type: 'object',
        required: [],
        properties: {
            id: id(),
            extension: {
                type: 'array',
                items: Extension()
            }
        }
    }
};

module.exports = Element;