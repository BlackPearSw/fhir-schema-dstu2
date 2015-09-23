var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Practitioner', function () {

    var schema = fhir.schema.Practitioner;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Practitioner',
            id: '123456',
            identifier: [
                {
                    use: 'official',
                    system: 'http://health.org/identifier',
                    value: '987654321'
                }
            ],
            active: true,
            name: {
                text: 'Dr Watson'
            },
            telecom: [
                {
                    system: 'email',
                    value: 'watson@health.org'
                }
            ],
            address: [
                {
                    use: 'work',
                    text: '221B Baker Street'
                }
            ],
            gender: 'male',
            birthDate: '1980-04-01',
            photo: [],
            practitionerRole: [
                {
                    managingOrganization: {
                        display: 'Health Org Inc'
                    },
                    role: {
                        coding: [
                            {
                                system: 'http://health.org/role',
                                code: 'sidekick'
                            }
                        ]
                    },
                    specialty: [
                        {
                            text: 'doctor'
                        }
                    ],
                    period: {
                        start: '1990-04-01'
                    },
                    location: [
                        {
                            display: 'London'
                        }
                    ],
                    healthcareService: [
                        {
                            display: 'investigations'
                        }
                    ]
                }
            ],
            qualification: [
                {
                    identifier: [
                        {
                            system: 'http://health.org/qualifications',
                            value: 'MD'
                        }
                    ],
                    code: {
                        text: 'Doctor of Medicine'
                    },
                    period: {
                        start: '1990-01-30'
                    },
                    issuer: {
                        display: 'London School of Medicine'
                    }
                }
            ],
            communication: [
                {
                    text: 'English'
                }
            ]
        };
    });

    it('validates a Practitioner', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Practitioner with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});