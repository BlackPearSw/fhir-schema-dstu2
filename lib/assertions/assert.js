function assert(assertions) {
    //TODO confirm that assertions is array and cast
    return function (data, schema) {
        var result = assertions.reduce(function (prev, item) {
            var s = item(data, schema);

            return s ? (prev ? prev + '; ' + s : s) : prev;

        }, null);
        return result
    }
}

module.exports = assert;