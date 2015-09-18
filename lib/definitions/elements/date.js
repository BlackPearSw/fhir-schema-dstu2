var date = {
    title: 'date',
    type: 'string',
    pattern: /^-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?$/
    //TODO: allows a broader set of values than are actually valid (e.g. leap years) so additional validation is needed
};

module.exports = date;
