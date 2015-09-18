var Practitioner = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    properties: {
        resourceType: {
            pattern: '^Practitioner$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        active: {$ref: 'boolean'},
        name: {$ref: 'HumanName'},
        telecom: {
            type: 'array',
            items: {$ref: 'ContactPoint'}
        },
        address: {
            type: 'array',
            items: {$ref: 'Address'}
        },
        gender: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AdministrativeGender'}
            ]
        },
        birthDate: {$ref: 'date'},
        photo: {
            type: 'array',
            items: {$ref: 'Attachment'}
        },
        practitionerRole: {
            type: 'array',
            items: {$ref: 'Practitioner.practitionerRole'}
        },
        qualification: {
            type: 'array',
            items: {$ref: 'Practitioner.qualification'}
        },
        communication: {$ref: 'CodeableConcept'}
    }
};

module.exports = Practitioner;