module.exports = {
    isBoundTo: function (binding, expectation) {
        function stringToExactMatch(s) {
            return '^' + s + '$';
        }

        function makeRegExp(codes){
            if (!codes) return /.*/g;

            return new RegExp(binding.codes
                .map(stringToExactMatch)
                .join('|'));
        }

        var regex = makeRegExp(binding.codes);

        function matchesSystem(item) {
            if (!binding.system) return true;

            return (binding.system && item.system === binding.system);
        }

        function matchesCode(item) {
            if (!binding.codes) return true;

            return (item.code.match(regex));
        }

        return function (data, schema) {
            if (!data.coding) return null;
            if (data.coding.length === 0) return null;

            var match = false;
            data.coding.forEach(function (item) {
                if (match) return;

                if (!matchesSystem(item)) return;

                if (!matchesCode(item)) return;

                match = true;
            });

            return match ? null : expectation;
        };
    }
};