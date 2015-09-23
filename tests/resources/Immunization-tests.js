var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Immunization', function () {

    var schema = fhir.schema.Immunization;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Immunization',
            identifier: [{
                value: 'Imm123'
            }],
            status: 'completed',
            date: '2015-08-25T17:00:00',
            vaccineCode: {
                text: 'dummy'
            },
            patient: {
                reference: 'Patient/123'
            },
            wasNotGiven: false,
            reported: false,
            performer: {
                reference: 'Practitioner/456'
            },
            requester: {
                reference: 'Practitioner/123'
            },
            encounter: {
                reference: 'Encounter/789'
            },
            manufacturer: {
                display: 'Pharma Inc'
            },
            location: {
                display: 'Mobile clinic'
            },
            lotNumber: 'A123456789/2015',
            expirationDate: '2020-04-12',
            site: {
                text: 'arm (R)'
            },
            route: {
                text: 'injection'
            },
            doseQuantity: {
                value: 5.5,
                unit: 'ml'
            },
            note: [
                {
                    text: 'The quick brown fox etc'
                }
            ],
            explanation: {
                reason: [{
                    text: 'As necessary'
                }]
            },
            reaction: [
                {
                    date: '2015-08-25T17:10:00',
                    detail: {
                        display: 'Rash'
                    },
                    reported: true
                }
            ],
            vaccinationProtocol: [
                {
                    doseSequence: 1,
                    description: 'Single dose',
                    authority: {
                        display: 'NICE'
                    },
                    series: 'Routine adult vaccs',
                    seriesDoses: 1,
                    targetDisease: [
                        {
                            text: 'Nasty infectious disease'
                        }
                    ],
                    doseStatus: {
                        coding: [
                            {
                                code: 'count'
                            }
                        ]
                    },
                    doseStatusReason: {
                        text: 'efficacious'
                    }
                }
            ]
        };
    });

    it('validates an Immunization', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an Immunization with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization without status', function () {
        delete data.status;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization with invalid status', function () {
        data.status = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization without vaccineCode', function () {
        delete data.vaccineCode;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization without patient', function () {
        delete data.patient;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization without wasNotGiven', function () {
        delete data.wasNotGiven;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization without reported', function () {
        delete data.reported;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization when vaccinationProtocol.doseSequence missing', function () {
        delete data.vaccinationProtocol[0].doseSequence;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization when vaccinationProtocol.targetDisease missing', function () {
        delete data.vaccinationProtocol[0].targetDisease;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization when vaccinationProtocol.targetDisease empty', function () {
        data.vaccinationProtocol[0].targetDisease = [];

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Immunization when vaccinationProtocol.doseStatus missing', function () {
        delete data.vaccinationProtocol[0].doseStatus;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});