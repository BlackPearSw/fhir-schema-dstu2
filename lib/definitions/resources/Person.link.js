module.exports = {
    title: 'Person.link',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['target'],
    properties: {
        target: {$ref: 'Reference'},
        assurance: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'IdentityAssuranceLevel'}
            ]
        }
    }
};