import { combineReducers } from 'redux'

import {
    TRAINING_RESET,
    TRAINING_START,
    TRAINING_PAUSE,
    TRAINING_TIMERTICK,
    TRAINING_HELP_LAYER_SHOW,
    TRAINING_HELP_LAYER_HIDE,
    TRAINING_PULSE_VALUE_ADD
} from '../actions'

export const TRAINING_STATUS_PAUSED = 0;
export const TRAINING_STATUS_RUNING = 1;
export const TRAINING_STATUS_FINISHED = 2;
export const TRAINING_STATUS_FINISHED_PULSE = 3;

const initialState = {
    training: {
        isHelpLayerVisible: false,

        status: TRAINING_STATUS_PAUSED,
        //status: TRAINING_STATUS_FINISHED,
        exercise: -1,
        restTime: 5,
        //restTime: 1,
        workTime: 0,
        spentTime: 0,
        totalTime: 0,
        duration: 0,

        id: 0,
        result: [],
        startedAt: 0,
        finishedAt: 0,
        pulse: 0,
        rate: 0,
        comment: '',

        exercises: [
            {
                id: 501,
                eid: 46,
                name: "Приседания",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/46_prisedaniya-720.mp4",
                duration: 10,
                resttime: 15
            },
            {
                id: 502,
                eid: 46,
                name: "Приседания",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/46_prisedaniya-720.mp4",
                duration: 10,
                resttime: 0
            }
            /*{
                id: 501,
                eid: 46,
                name: "Приседания",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/46_prisedaniya-720.mp4",
                duration: 7,
                resttime: 15
            },
            {
                id: 502,
                eid: 46,
                name: "Приседания",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/46_prisedaniya-720.mp4",
                duration: 7,
                resttime: 15
            },
            {
                id: 503,
                eid: 93,
                name: "Лодочка с прямыми руками вперед",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/93_lodochka-s-pryamimi-rukami-vpered-720.mp4",
                duration: 7,
                resttime: 15
            },
            {
                id: 504,
                eid: 93,
                name: "Лодочка с прямыми руками вперед",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/93_lodochka-s-pryamimi-rukami-vpered-720.mp4",
                duration: 30,
                resttime: 120
            },
            {
                id: 128,
                eid: 97,
                name: "Отжимания широким хватом с колен",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/97_otgimaniya-shirokim-hvatom-s-kolen-720.mp4",
                duration: 30,
                resttime: 60
            },
            {
                id: 129,
                eid: 97,
                name: "Отжимания широким хватом с колен",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/97_otgimaniya-shirokim-hvatom-s-kolen-720.mp4",
                duration: 30,
                resttime: 120
            },
            {
                id: 507,
                eid: 108,
                name: "Обратные отжимания от стула, колени согнуты",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/108_obratnie-otgimaniya-ot-stula-720.mp4",
                duration: 30,
                resttime: 60
            },
            {
                id: 508,
                eid: 108,
                name: "Обратные отжимания от стула, колени согнуты",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/108_obratnie-otgimaniya-ot-stula-720.mp4",
                duration: 30,
                resttime: 120
            },
            {
                id: 133,
                eid: 61,
                name: "Пресс",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/61_press-720.mp4",
                duration: 30,
                resttime: 60
            },
            {
                id: 134,
                eid: 61,
                name: "Пресс",
                video: "http://d2lgycgn2xkfkn.cloudfront.net/61_press-720.mp4",
                duration: 30,
                resttime: 0
            }*/
        ]
    }
};

function time() {
    var d = new Date();
    return Math.floor(d.getTime() / 1000);
}

function cleanState() {
    let nstate = {};
    nstate = Object.assign({}, initialState.training);
    nstate.totalTime = nstate.exercises.reduce((sum, item) => {
        return sum + item.duration + item.resttime;
    }, 0);
    return nstate;
}

function training(state, action) {
    let nstate = {};
    switch (action.type) {
        case TRAINING_RESET:
            return cleanState();
        case TRAINING_START:
            if (state.status != TRAINING_STATUS_RUNING) {
                nstate = Object.assign({}, state);
                if (nstate.startedAt == 0) {
                    nstate.startedAt = time(); // Время начала
                }
                nstate.status = TRAINING_STATUS_RUNING;
                return nstate;
            }
            return state;
        case TRAINING_PAUSE:
            if (state.status != TRAINING_PAUSE) {
                nstate = Object.assign({}, state);
                nstate.status = TRAINING_STATUS_PAUSED;
                return nstate;
            }
            return state;
        case TRAINING_TIMERTICK:
            if (state.status == TRAINING_STATUS_RUNING) {
                nstate = Object.assign({}, state);
                if (nstate.restTime > 0) {
                    nstate.restTime--;
                    if (nstate.exercise >= 0) {
                        nstate.spentTime++;
                    }
                    if (nstate.restTime == 0) {
                        if (nstate.exercise >= 0 && nstate.exercise < nstate.exercises.length) {
                            nstate.result[nstate.exercise].resttime =
                                time() - nstate.result[nstate.exercise].startedAt - nstate.exercises[nstate.exercise].duration;
                        }
                        nstate.workTime = 0;
                        nstate.exercise++;
                    }
                } else {
                    if (nstate.exercise < nstate.exercises.length) {
                        if (nstate.result.length <= nstate.exercise) {
                            nstate.result[nstate.exercise] = {startedAt: time()};
                        }
                        if (nstate.workTime < nstate.exercises[nstate.exercise].duration) {
                            nstate.workTime++;
                            if (nstate.exercise >= 0) {
                                nstate.spentTime++;
                            }
                        } else {
                            nstate.result[nstate.exercise].finishedAt = time();
                            nstate.result[nstate.exercise].duration =
                                nstate.result[nstate.exercise].finishedAt - nstate.result[nstate.exercise].startedAt;
                            nstate.restTime = nstate.exercises[nstate.exercise].resttime;
                            if (nstate.restTime == 0) {
                                nstate.result[nstate.exercise].resttime = 0;
                                nstate.workTime = 0;
                                nstate.exercise++;
                            }
                        }
                    }
                    if (nstate.exercise >= nstate.exercises.length) {
                        nstate.finishedAt = time(); // Время завершения
                        nstate.isHelpLayerVisible = false;
                        nstate.status = TRAINING_STATUS_FINISHED;
                    }
                }
                return nstate;
            }
            return state;
        case TRAINING_HELP_LAYER_SHOW:
            if (!state.isHelpLayerVisible) {
                let nstate = Object.assign({}, state);
                nstate.isHelpLayerVisible = true;
                return nstate;
            }
            return state;
        case TRAINING_HELP_LAYER_HIDE:
            if (state.isHelpLayerVisible) {
                let nstate = Object.assign({}, state);
                nstate.isHelpLayerVisible = false;
                return nstate;
            }
            return state;
        case TRAINING_PULSE_VALUE_ADD:
            console.log('TRAINING_PULSE_VALUE_ADD', action.value);
            let nstate = Object.assign({}, state);
            nstate.pulse = action.value;
            nstate.status = TRAINING_STATUS_FINISHED_PULSE;
            return nstate;
        default:
            if (typeof state == 'undefined') {
                return cleanState();
            }
            return state;
    }
}

export function getTraining(state) {
    return state.training ? state.training.training : initialState.training;
}

export default combineReducers({
    training
})
