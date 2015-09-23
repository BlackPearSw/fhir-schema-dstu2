var fhir = require('../../lib');
var expect = require('chai').expect;

describe('resources.Bundle', function () {

    var schema = fhir.schema.Bundle;
    var data;

    beforeEach(function () {
        data = {
            resourceType: 'Bundle',
            id: '123456',
            type: 'searchset',
            total: 9,
            link: [
                {
                    relation: 'next',
                    url: 'http://health.org/doc'
                }
            ],
            entry: [
                {
                    link: [
                        {
                            relation: 'self',
                            url: 'http://health.org/doc'
                        }
                    ],
                    fullUrl: 'http://health.org/fhir/Patient/123',
                    resource: {
                        resourceType: 'Patient'
                    },
                    search: {
                        mode: 'match',
                        score: 0.99
                    },
                    request: {
                        method: 'GET',
                        url: 'http://health.org/fhir/Bundle/123',
                        ifNoneMatch: 'don\'t panic',
                        ifModifiedSince: '2015-09-19T20:01:12:897Z',
                        ifMatch: 'all good',
                        ifNoneExist: 'conditionally create'
                    },
                    response: {
                        status: '200',
                        location: 'http://health.org/loc',
                        etag: '1234567890abcdefg',
                        lastModified: '2015-09-19T20:01:12:897Z'
                    }
                }
            ],
            signature: {
                type: {
                    code: 'digital'
                },
                when: '2015-04-12T17:34:23:004Z',
                whoUri: 'http://health.org/dr',
                contentType: 'application/xml',
                blob: 'ABCDEF01234567890'
            }
        };
    });

    it('validates a Bundle', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    it('rejects a Bundle with invalid id (confirms inheritance from Resource)', function () {
        data.id = '$%^&';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Bundle with invalid type', function () {
        data.type = 'foo';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects a Bundle without type', function () {
        delete data.type;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    describe('link', function () {

        it('rejects a Bundle with missing link.relation', function () {
            delete data.link[0].relation;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('rejects a Bundle with missing link.url', function () {
            delete data.link[0].url;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('entry', function () {
        describe('search', function () {
            it('rejects a Bundle with invalid entry.search.mode', function () {
                data.entry[0].search.mode = 'foo';

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });

            /*
            TODO: No formal constraints on entry.search.score

            it('rejects a Bundle with entry.search.score > 1', function () {
                data.entry[0].search.score = 1.01;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });

            it('validates a Bundle with entry.search.score = 1', function () {
                data.entry[0].search.score = 1.00;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.true;
            });

            it('validates a Bundle with entry.search.score = 0', function () {
                data.entry[0].search.score = 0.00;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.true;
            });

            it('rejects a Bundle with entry.search.score < 0', function () {
                data.entry[0].search.score = -0.01;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });
            */
        });

        describe('request', function(){
            it('rejects a Bundle with invalid entry.request.method', function () {
                data.entry[0].request.method = 'foo';

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });

            it('rejects a Bundle with missing entry.request.method', function () {
                delete data.entry[0].request.method;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });

            it('rejects a Bundle with missing entry.request.url', function () {
                delete data.entry[0].request.url;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });
        });

        describe('request', function(){
            it('rejects a Bundle with missing entry.response.status', function () {
                delete data.entry[0].response.status;

                var result = fhir.validator.validate(data, schema);

                expect(result.valid).to.be.false;
            });
        });
    });
});