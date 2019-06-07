const timerNameValidator = ( val ) => {
    return typeof val !== 'string' || val === '' || val == undefined ? 'name field is invalid here' : null
};

const timerDelayValidator = ( val ) => {
    return typeof val != 'number'
        || val < 0
        || val > 5000
        || val === undefined
        ? 'delay field is invalid here' : null
};

const timerIntervalValidator = ( val ) => {
    return typeof val !== 'boolean' || val === undefined ? 'interval field is invalid here' : null
};

const timerJobValidator = ( val ) => {
    return typeof val !== 'function' || val === undefined ? 'job field is invalid here' : null
};

module.exports = {
    timerNameValidator,
    timerDelayValidator,
    timerIntervalValidator,
    timerJobValidator
}