var Attachment = function () {
    var schema = {
        title: 'Attachment',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            contentType: {$ref: 'code'},//TODO: ensure MimeType
            language: {$ref: 'code'},//TODO: ensure Language
            data: {$ref: 'base64Binary'},
            url: {$ref: 'uri'},
            size: {$ref: 'unsignedInt'},
            hash: {$ref: 'base64Binary'},
            title: {$ref: 'string'},
            creation: {$ref: 'dateTime'}
        }
    };

    return schema;
};

module.exports = Attachment;