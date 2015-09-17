var ContactPoint = {
    title: 'ContactPoint',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        system: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'ContactPointSystem'}
            ]
        },
        value: {$ref: 'string'},
        use: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'ContactPointSystem'}
            ]
        },
        period: {$ref: 'Period'}
        //TODO a system is required if value is supplied
    }
};

module.exports = ContactPoint;