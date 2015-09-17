var link = {
    title: 'Patient.link',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['other', 'type'],
    properties: {
        other: {$ref: 'Reference'},
        type: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'LinkType'}
            ]
        }
    }
};

module.exports = link;