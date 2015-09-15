function choice(match, expectation) {
    if (Array.isArray(match)) {
        var fn = function(p){
            return match.indexOf(p) !== -1;
        };
    }
    else {
        var regex = new RegExp('^' + match);
        var fn = function(p){
            return regex.test(p);
        };
    }

    return function (data, schema) {
        var n = 0;

        for (var p in data) {
            if (fn(p)) {
                n = n + 1;
            }
        }

        return n > 1 ? expectation : null;
    }
}

module.exports = choice;