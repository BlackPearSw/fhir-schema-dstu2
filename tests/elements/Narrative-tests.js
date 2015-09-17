var fhir = require('../../lib');
var tv4 = require('tv4');
var expect = require('chai').expect;

describe('elements.Narrative', function () {

    var schema = fhir.schema.Narrative;
    var data;

    beforeEach(function(){
        data = {
            status: 'generated'
        };
    });

    function validate(data, schema){
        var checkRecursive = false;
        var banUnknownProperties = true;
        return tv4.validateMultiple(data, schema, checkRecursive, banUnknownProperties);
    }

    it('validates a Narrative', function () {
        var result = validate(data, schema);

        if (!result.valid){
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects when invalid status', function () {
        data.status = 'fubar';

        var result = validate(data, schema);

        expect(result.valid).to.be.false;
    });
});