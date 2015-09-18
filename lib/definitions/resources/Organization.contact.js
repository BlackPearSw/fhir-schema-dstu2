var contact = {
    title: 'Organization.contact',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        purpose: {$ref: 'CodeableConcept'},
        name: {$ref: 'HumanName'},
        telecom: {
            type: 'array',
            items: {$ref: 'ContactPoint'}
        },
        address: {$ref: 'Address'}
    }
};

module.exports = contact;