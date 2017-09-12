var NumberValidators = (function () {
    function NumberValidators() {
    }
    NumberValidators.rangeHardCoded = function (c) {
        if (c.value && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
            return { 'range': true };
        }
        // valid
        return null;
    };
    NumberValidators.range = function (min, max) {
        // return a key vale pair or null ; the key is a string and the vlaue is a boolean
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    NumberValidators.prototype.passwordWatcher = function (ctrl) {
        return ctrl.get('type').value !== ctrl.get('name').value
            ? null
            : { 'nomatch': { expected: 'certain value', acutal: ctrl.get('type').value } };
    };
    return NumberValidators;
}());
export { NumberValidators };
//# sourceMappingURL=number.validator.js.map