import { fork, take, select, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actions from '../actions'
import { TRAINING_STATUS_RUNING, getTraining } from '../reducers/training'

export function* login() {

}

export function* logout() {

}

function* training_timer() {
    while (yield take(actions.TRAINING_START)) {
        while (true) {
            yield delay(1000);
            const state = yield select(getTraining);
            if (state.status === TRAINING_STATUS_RUNING) {
                yield put(actions.training_timertick());
            } else {
                break;
            }
        }
    }
}

export default function* root() {
    yield [
        fork(login),
        fork(logout),
        fork(training_timer)
    ];
}
