var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.OperationOutcome', function () {

    var schema = fhir.schema.OperationOutcome;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'OperationOutcome',
            issue: [
                {
                    severity: 'error',
                    code: 'login',
                    details: {
                        coding: [
                            {
                                code: '500'
                            }
                        ],
                        text: 'Internal server error'
                    },
                    diagnostics: 'I cannot change the laws of physics, Captain! A\'ve got to have thirty minutes.',
                    location: ['power converter interface']
                }
            ]
        };
    });

    it('validates an OperationOutcome', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an OperationOutcome with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an OperationOutcome with invalid issue.severity', function () {
        data.issue[0].severity = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an OperationOutcome with missing issue.severity', function () {
        delete data.issue[0].severity;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an OperationOutcome with invalid issue.code', function () {
        data.issue[0].code = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an OperationOutcome with missing issue.code', function () {
        delete data.issue[0].code;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
})
;