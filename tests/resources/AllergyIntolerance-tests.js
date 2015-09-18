var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.AllergyIntolerance', function () {

    var schema = fhir.schema.AllergyIntolerance;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'AllergyIntolerance',
            identifier: [{
                value: 'Imm123'
            }],
            onset: '2014-04-15T09:31:22',
            recordedDate: '2015-05-20T10:45:00',
            recorder: {
                reference: 'Practitioner/12345'
            },
            patient: {
                reference: 'Patient/123'
            },
            reporter: {
                reference: 'Practitioner/12345'
            },
            substance: {
                text: 'allergy to latex'
            },
            status: 'active',
            criticality: 'CRITH',
            type: 'allergy',
            category: 'food',
            lastOccurence: '2015-05-19T09:00:00',
            note: {
                text: 'The quick brown fox etc'
            },
            reaction: [
                {
                    substance: {
                        text: 'rubber gloves'
                    },
                    certainty: 'confirmed',
                    manifestation: {
                        text: 'rash'
                    },
                    description: 'The quick brown fox etc',
                    onset: '2014-04-15T09:31:22',
                    severity: 'moderate',
                    exposureRoute: {
                        text: 'washing up'
                    },
                    note: {
                        text: 'The quick brown fox etc'
                    }
                }
            ]
        };
    });

    it('validates an AllergyIntolerance', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects an AllergyIntolerance with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });


    it('rejects an AllergyIntolerance without patient', function () {
        delete data.patient;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance without substance', function () {
        delete data.substance;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid status', function () {
        data.status = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid criticality', function () {
        data.criticality = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid type', function () {
        data.type = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid category', function () {
        data.category = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid reaction.certainty', function () {
        data.reaction[0].certainty = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with reaction.manifestation missing', function () {
        delete data.reaction[0].manifestation;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an AllergyIntolerance with invalid reaction.severity', function () {
        data.reaction[0].severity = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});