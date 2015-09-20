module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    properties: {
        resourceType: {
            pattern: '^OperationOutcome$'
        },
        issue: {
            type: 'array',
            items: {$ref: 'OperationOutcome.issue'}
        }
    }
};