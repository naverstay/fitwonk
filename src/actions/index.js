export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const TRAINING_RESET = 'TRAINING_RESET';
export const TRAINING_START = 'TRAINING_START';
export const TRAINING_PAUSE = 'TRAINING_PAUSE';
export const TRAINING_TIMERTICK = 'TRAINING_TIMERTICK';
export const TRAINING_HELP_LAYER_SHOW = 'TRAINING_HELP_LAYER_SHOW';
export const TRAINING_HELP_LAYER_HIDE = 'TRAINING_HELP_LAYER_HIDE';
export const TRAINING_PULSE_VALUE_ADD = 'TRAINING_PULSE_VALUE_ADD';

export function login() {
    return {
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function training_reset() {
    return {
        type: TRAINING_RESET
    }
}

export function training_start() {
    return {
        type: TRAINING_START
    }
}

export function training_pause() {
    return {
        type: TRAINING_PAUSE
    }
}

export function training_timertick() {
    return {
        type: TRAINING_TIMERTICK
    }
}

export function training_help_layer_show() {
    return {
        type: TRAINING_HELP_LAYER_SHOW
    }
}

export function training_help_layer_hide() {
    return {
        type: TRAINING_HELP_LAYER_HIDE
    }
}

export function training_pulse_value_add(value) {
    return {
        type: TRAINING_PULSE_VALUE_ADD,
        value: value
    }
}
