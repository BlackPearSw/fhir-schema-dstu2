module.exports = {
    title: 'Patient.contact',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        relationship: {$ref: 'CodeableConcept'},
        name: {$ref: 'HumanName'},
        telecom: {
            type: 'array',
            items: {$ref: 'ContactPoint'}
        },
        address: {$ref: 'Address'},
        gender: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AdministrativeGender'}
            ]
        },
        organization: {
            allOf: [
                {$ref: 'Reference'},
                {format: 'Patient.contact.organization'}
            ]
        },
        period: {$ref: 'Period'}
    }
};