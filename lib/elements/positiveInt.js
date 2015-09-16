var positiveInt = function(){
    return {
        title: 'FHIR DSTU2 positiveInt',
        type: 'integer',
        minimum: 1
    };
};

module.exports = positiveInt;