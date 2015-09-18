var issue = {
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['severity', 'code'],
    properties: {
        severity: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'IssueSeverity'}
            ]
        },
        code: {allOf: [
            {$ref: 'code'},
            {$ref: 'IssueCode'}
        ]},
        details: {$ref: 'CodeableConcept'},
        diagnostics: {$ref: 'string'},
        location: {
            type: 'array',
            items: {$ref: 'string'}
        }
    }
};

module.exports = issue;