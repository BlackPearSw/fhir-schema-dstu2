var reaction = {
    title: 'Immunization.reaction',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        date: {$ref: 'dateTime'},
        detail: {
            allOf: [
                {$ref: 'Reference'},
                {format: 'Immunization.reaction.detail'}
            ]
        },
        reported: {$ref: 'boolean'}
    }
};

module.exports = reaction;