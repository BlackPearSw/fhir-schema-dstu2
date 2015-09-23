var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('resources.Schedule', function () {

    var schema = fhir.schema.Schedule;
    var data;

    beforeEach(function(){
        data = {
            resourceType: 'Schedule',
            id: '123456',
            identifier: [
                {
                    system: 'http://health.org/Schedule/id',
                    value: '123'
                }
            ],
            type: [
                {
                    coding: [
                        {
                            code: 'type'
                        }
                    ]
                }
            ],
            actor: {
                reference: 'Patient/123'
            },
            planningHorizon: {
                start: '2015',
                end: '2016'
            },
            comment: 'The quick brown fox etc'
        };
    });

    it('validates a Schedule', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Schedule with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Schedule without an actor', function () {
        delete data.actor;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});