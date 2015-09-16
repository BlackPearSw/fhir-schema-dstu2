var _ = require('lodash');

module.exports = {
    clone: function(schema){
        return _.cloneDeep(schema);
    },
    make: function(proto, schema){
        var base = _.cloneDeep(proto);
        return _.merge(base, schema);
    },
    makeElement: function(schema){
        var proto = require('../elements/Element')();
        var base = _.cloneDeep(proto);
        return _.merge(base, schema);
    },
    makeBackboneElement: function(schema){
        var proto = require('../elements/BackboneElement')();
        var base = _.cloneDeep(proto);
        return _.merge(base, schema);
    },
    makeResource: function(schema, options){
        var proto = require('../resources/Resource')(options);
        var base = _.cloneDeep(proto);
        return _.merge(base, schema);
    },
    makeDomainResource: function(schema, options){
        var proto = require('../resources/DomainResource')(options);
        var base = _.cloneDeep(proto);
        return _.merge(base, schema);
    }
};