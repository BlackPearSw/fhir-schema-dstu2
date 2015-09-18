var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Condition', function () {

    var schema = fhir.schema.Condition;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Condition',
            id: '123456',
            identifier: [
                {
                    use: 'official',
                    system: 'http://health.org/identifier',
                    value: '987654321'
                }
            ],
            patient: {
                reference: 'Patient/123'
            },
            encounter: {
                reference: 'Encounter/456'
            },
            asserter: {
                reference: 'Patient/123'
            },
            dateRecorded: '2014-06-14',
            code: {
                coding: [
                    {
                        code: 'foo'
                    }
                ],
                text: 'Noted foo'
            },
            category: {
                coding: [
                    {
                        system: 'http://hl7.org/fhir/condition-category',
                        code: 'finding'
                    }
                ]
            },
            clinicalStatus: 'relapse',
            verificationStatus: 'confirmed',
            severity: {
                text: 'awful'
            },
            onsetQuantity: {
                value: 12.5,
                unit: 'years'
            },
            abatementBoolean: false,
            stage: {
                summary: {
                    text: 'fubar'
                }
            },
            evidence: [
                {
                    detail: {
                        display: 'MRI scan'
                    }
                }
            ],
            bodySite: [
                {
                    text: 'leg'
                }
            ],
            notes: 'The quick brown fox etc.'
        };
    });

    it('validates a Condition', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Condition with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition without a patient', function () {
        delete data.patient;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition without a code', function () {
        delete data.code;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition without a verificationStatus', function () {
        delete data.verificationStatus;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition with more than one onset[x]', function () {
        data.onsetDateTime = '2014-04-20';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition with more than one abatement[x]', function () {
        data.abatementDateTime = '2014-04-20';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition.stage without summary or assessment', function () {
        delete data.stage.summary;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Condition.evidence without code or details', function () {
        delete data.evidence[0].detail;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});