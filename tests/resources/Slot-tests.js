var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Slot', function () {

    var schema = fhir.schema.Slot;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Slot',
            id: '123456',
            identifier: [
                {
                    system: 'http://health.org/Slot/id',
                    value: '123'
                }
            ],
            type: {
                coding: [
                    {
                        code: 'type'
                    }
                ]
            },
            schedule: {
                reference: 'Schedule/123'
            },
            freeBusyType: 'free',
            start: '2015-09-22T12:00:00:000Z',
            end: '2015-09-22T12:00:00:000Z',
            overbooked: true,
            comment: 'The quick brown fox jumped etc'
        };
    });

    it('validates a Slot', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Slot with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Slot with missing schedule', function () {
        delete data.schedule;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Slot with missing freeBusyType', function () {
        delete data.freeBusyType;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Slot with missing start', function () {
        delete data.start;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Slot with missing end', function () {
        delete data.end;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});