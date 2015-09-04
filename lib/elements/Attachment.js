var utils = require('../utils/index');
var code = require('../elements/code');
var string = require('../elements/string');
var base64Binary = require('../elements/base64Binary');
var uri = require('../elements/uri');
var unsignedInt = require('../elements/unsignedInt');
var dateTime = require('../elements/dateTime');

var Attachment = function(){
    var schema = {
        title: 'FHIR DSTU2 Attachment',
        properties: {
            contentType: code(),
            //TODO: ensure MimeType
            language: code(),
            //TODO: ensure Language
            data: base64Binary(),
            url: uri(),
            size: unsignedInt(),
            hash: base64Binary(),
            title: string(),
            creation: dateTime()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Attachment;