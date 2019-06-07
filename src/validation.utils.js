const {
    timerDelayValidator,
    timerNameValidator,
    timerIntervalValidator,
    timerJobValidator
} = require('./validation.rules');

const timerValidator = {
    name: timerNameValidator,
    delay: timerDelayValidator,
    interval: timerIntervalValidator,
    job: timerJobValidator
};

const validate = (object, validator = timerValidator) => {
    const errors = Object.keys(validator)
        .map(function (key) {
            const validationRule = validator[key];
            const result = validationRule(object[key]);
            if (result) {
                return {
                    field: key,
                    message: result
                };
            }
            return null;
        })
        .filter(function (el) { return el; });

    return errors;
};

module.exports = {
    validate,
    timerValidator
};
