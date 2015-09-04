var id = function() {
    return {
        title: 'FHIR DSTU2 id',
        type: 'string',
        pattern: /^[A-Za-z0-9\-\.]{1,64}$/
    };
};

module.exports = id;