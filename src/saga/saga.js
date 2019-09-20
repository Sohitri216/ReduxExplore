import { select } from 'redux-saga/effects';
import { takeEvery, put, delay } from 'redux-saga/effects';


export const getCurrentVal = (state) => state.counterVal;
export function* incAsync() {
    yield delay(4000);
    let val = yield select(getCurrentVal);
    yield put({
        type: 'INC_ASYNC',
        products: [{
            name: 'iPhone'
        }],
        user: 'Michael',
        payload: {
            counterVal: val + 1
        }
    })
}

export function* watchIncrement() {
    yield takeEvery('INC_COUNT', incAsync)
}