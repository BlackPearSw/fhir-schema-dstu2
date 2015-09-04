var utils = require('../utils');
var Element = require('./Element');
var Extension = require('./Extension');

var BackboneElement = function() {
    var schema = {
        title: 'FHIR DSTU2 BackboneElement',
        properties: {
            modifierExtension: {
                type: 'array',
                items: Extension
            }
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = BackboneElement;