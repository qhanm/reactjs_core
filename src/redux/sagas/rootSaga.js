import { all } from 'redux-saga/effects';
import * as Auth from './reducers/Auth/UserLoginReducerSaga';

export function * rootSaga() {
    yield all([
        Auth.followSignIn(),
    ])
}
