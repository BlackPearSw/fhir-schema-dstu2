var fhir = require('../../lib');
var expect = require('chai').expect;

describe('elements.Timing', function () {

    var schema = fhir.schema.Timing;
    var data;

    beforeEach(function(){
        data = {
            event: [
                '2015-09-25T21:00:00',
                '2015-09-26T11:00:00'
            ],
            repeat: {
                boundsPeriod: {
                    end: '2015-09-26T12:00:00'
                }
            }
        }
    });


    it('validates a Timing', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Timing with more than one repeat.bounds[x]', function () {
        data.repeat.boundsQuantity = {
            value: 1.23
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});