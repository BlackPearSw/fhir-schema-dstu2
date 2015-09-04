var _ = require('lodash');

module.exports = {
    hasOneMatch: function (match, expectation) {
        return function (data, schema) {

            if (Array.isArray(data)) {
                var result = _.filter(data, _.matches(match));
                if (result.length !== 1) {
                    return expectation;
                }
                else {
                    return null;
                }
            }

            return expectation;
        }
    },
    hasMatchOrIsEmpty: function (match, expectation) {
        return function (data, schema) {

            if (Array.isArray(data)) {
                if (data.length === 0){
                    return null;
                };

                var result = _.filter(data, _.matches(match));
                if (result.length === 0) {
                    return expectation;
                }
                else {
                    return null;
                }
            }

            return expectation;
        }
    }
};


