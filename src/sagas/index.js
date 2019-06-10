import {all} from 'redux-saga/effects';
import {IteamSaga} from './ItemSaga';
import {totalPageSaga} from './totalPageSaga';

function* rootsaga() {
    yield all([...IteamSaga,
    ...totalPageSaga]);
}
export default rootsaga;