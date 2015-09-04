var time = function(){
    return {
        title: 'FHIR DSTU2 time',
        type: 'string',
        pattern: /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?$/
    };
};

module.exports = time;