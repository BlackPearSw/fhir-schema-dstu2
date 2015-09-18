var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.MedicationOrder', function () {

    var schema = fhir.schema.MedicationOrder;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'MedicationOrder',
            identifier: [{
                value: 'Rx123'
            }],
            dateWritten: '2015-08-25T17:00:00',
            status: 'active',
            dateEnded: '2015-08-28',
            reasonEnded: {
                text: 'Disliked flavour'
            },
            patient: {
                reference: 'Patient/123'
            },
            prescriber: {
                reference: 'Practitioner/456'
            },
            encounter: {
                reference: 'Encounter/789'
            },
            reasonReference: {
                display: 'For horrible condition'
            },
            notes: 'The quick brown fox etc',
            dosageInstruction: [
                {
                    text: '2 tablets daily',
                    additionalInstructions: {
                        text: 'with water'
                    },
                    timing: {
                        event : ['2015-09-15T21:00:00']
                    },
                    asNeededBoolean: true,
                    siteCodeableConcept: {
                        text: 'leg'
                    },
                    route: {
                        text: 'parenteral'
                    },
                    method: {
                        text: 'swallow'
                    },
                    doseQuantity: {
                        value: 2,
                        unit: 'tablets'
                    },
                    rateRatio: {
                        numerator: {
                            value: 1
                        },
                        denominator: {
                            value: 2
                        }
                    },
                    maxDoseForPeriod: {
                        numerator: {
                            value: 1
                        },
                        denominator: {
                            value: 4
                        }
                    }
                }
            ],
            dispenseRequest: {
                medicationCodeableConcept: {
                    text: 'Aspirin 250mg'
                },
                validityPeriod: {
                    end: '2015-10-01'
                },
                numberOfRepeatsAllowed: 2,
                quantity: {
                    value: 50,
                    unit: 'tablets'
                },
                expectedSupplyDuration: {
                    value: 7,
                    unit: 'days'
                }
            },
            substitution: {
                type: {
                    text: 'Any generic'
                },
                reason: {
                    text: 'Efficacy'
                }
            },
            priorPrescription: {
                display: 'Paracetamol 500mg'
            }
        };
    });

    it('validates a MedicationOrder', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a MedicationOrder with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one reason[x]', function () {
        data.reasonCodeableConcept = {
            text: 'For horrible condition'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one dosageInstruction.asNeeded[x]', function () {
        data.dosageInstruction[0].asNeededCodeableConcept = {
            text: 'For horrible condition'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one dosageInstruction.site[x]', function () {
        data.dosageInstruction[0].siteReference = {
            display: 'arm'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one dosageInstruction.dose[x]', function () {
        data.dosageInstruction[0].doseRange = { };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one dosageInstruction.rate[x]', function () {
        data.dosageInstruction[0].rateRange = { };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder with more than one dispenseRequest.medication[x]', function () {
        data.dispenseRequest.medicationReference = {
            display: 'Aspirin 250mg'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a MedicationOrder when substitution.type missing', function () {
        delete data.substitution.type;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});