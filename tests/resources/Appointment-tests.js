var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Appointment', function () {

    var schema = fhir.schema.Appointment;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Appointment',
            id: '123456',
            identifier: [
                {
                    system: 'http://health.org/Appointment/id',
                    value: '123'
                }
            ],
            status: 'booked',
            type: {
                coding: [
                    {
                        code: 'type'
                    }
                ]
            },
            reason: {
                text: 'presenting complaint'
            },
            priority: 3,
            description: 'Patient consultation',
            start: '2015-09-30T14:00:00',
            end: '2015-09-30T14:30:00',
            minutesDuration: 15,
            slot: {
                reference: 'Slot/123'
            },
            comment: 'The quick brown fox etc.',
            participant: [
                {
                    type: [
                        {
                            text: 'Doctor'
                        }
                    ],
                    actor: {
                        reference: 'Practitioner/123'
                    },
                    required: 'optional',
                    status: 'accepted'

                }
            ]

            /*schedule: {
             reference: 'Schedule/123'
             },
             freeBusyType: 'free',
             start: '2015-09-22T12:00:00:000Z',
             end: '2015-09-22T12:00:00:000Z',
             overbooked: true,
             comment: 'The quick brown fox jumped etc'
             */
        };
    });

    it('validates an Appointment', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an Appointment with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Appointment with missing status', function () {
        delete data.status;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an Appointment with invalid status', function () {
        data.status = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    describe('participant', function(){
        it('rejects an Appointment without participant', function () {
            data.participant = [];

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('rejects an Appointment with invalid participant.required', function () {
            data.participant[0].required = 'foo';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('rejects an Appointment with invalid participant.status', function () {
            data.participant[0].status = 'foo';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('rejects an Appointment with missing participant.status', function () {
            delete data.participant[0].status;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});