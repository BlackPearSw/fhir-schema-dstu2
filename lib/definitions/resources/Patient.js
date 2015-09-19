var Patient = {
    allOf: [
        {$ref: 'DomainResource'},
        {
            oneOf: [
                {required: ['deceasedBoolean']},
                {required: ['deceasedDateTime']},
                {
                    not: {
                        oneOf: [
                            {required: ['deceasedBoolean']},
                            {required: ['deceasedDateTime']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['multipleBirthBoolean']},
                {required: ['multipleBirthInteger']},
                {
                    not: {
                        oneOf: [
                            {required: ['multipleBirthBoolean']},
                            {required: ['multipleBirthInteger']}
                        ]
                    }
                }
            ]
        }
    ],
    properties: {
        resourceType: {
            pattern: '^Patient$'
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
        deceasedBoolean: {$ref: 'boolean'},
        deceasedDateTime: {$ref: 'dateTime'},
        address: {
            type: 'array',
            items: {$ref: 'Address'}
        },
        maritalStatus: {$ref: 'CodeableConcept'},
        multipleBirthBoolean: {$ref: 'boolean'},
        multipleBirthInteger: {$ref: 'integer'},
        photo: {
            type: 'array',
            items: {$ref: 'Attachment'}
        },
        contact: {
            type: 'array',
            items: {$ref: 'Patient.contact'}
        },
        animal: {$ref: 'Patient.animal'},
        communication: {$ref: 'Patient.communication'},
        careProvider: {
            type: 'array',
            items: {
                allOf: [
                    {$ref: 'Reference'},
                    {format: 'Patient.careProvider'}
                ]
            }
        },
        managingOrganization: {
            allOf: [
                {$ref: 'Reference'},
                {format: 'Patient.managingOrganization'}
            ]
        },
        link: {
            type: 'array',
            items: {$ref: 'Patient.link'}
        },
        active: {$ref: 'boolean'}
    }
};

module.exports = Patient;