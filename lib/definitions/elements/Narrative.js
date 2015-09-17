var Narrative = {
    title: 'Narrative',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'NarrativeStatus'}
            ]
        },
        div: {$ref: 'string'}
        //TODO: can we validate xhtml?
    }
};

module.exports = Narrative;