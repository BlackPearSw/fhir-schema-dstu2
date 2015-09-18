var Person = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    properties: {
        resourceType: {
            pattern: '^Person$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        name: {
            type: 'array',
            items: {$ref: 'HumanName'}
        },
        telecom: {
            type: 'array',
            items: {$ref: 'ContactPoint'}
        },
        gender: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AdministrativeGender'}
            ]
        },
        birthDate: {$ref: 'date'},
        address: {
            type: 'array',
            items: {$ref: 'Address'}
        },
        photo: {
            type: 'array',
            items: {$ref: 'Attachment'}
        },
        managingOrganization: {$ref: 'Reference'},
        link: {
            type: 'array',
            items: {$ref: 'Person.link'}
        },
        active: {$ref: 'boolean'}
    }
};

module.exports = Person;