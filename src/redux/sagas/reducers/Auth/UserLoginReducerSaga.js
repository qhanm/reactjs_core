import Axios from 'axios';
import { takeLatest, delay, put, select } from 'redux-saga/effects';
import {SAGA_USER_SIGN_IN_API} from "../../constants/Auth/UserLoginConstantSaga";
import {authService} from "../../../../services/AuthService";
import {hideLoadingAction, showLoadingAction} from "../../../actions/LoadingAction";
import PropTypes from 'prop-types';
import {ACCESS_TOKEN, STATUS_SUCCESS, USER_LOGIN} from "../../../../util/constants/SettingConstant";
import {setUserLoginAction} from "../../../actions/UserLoginAction";
import {URL_DASHBOARD} from "../../../../util/constants/UrlConstnat";

signIn.propTypes = {
    userLogin : {
        email: PropTypes.string,
        password: PropTypes.string,
        remember: PropTypes.bool
    },
    type: PropTypes.string
}
function * signIn(action) {
    yield put(showLoadingAction())

    yield delay(500);
    try{
        const {data, status} = yield authService.signId(action.userLogin);

        if(status === STATUS_SUCCESS)
        {
            if(action.userLogin.remember){
                localStorage.setItem(ACCESS_TOKEN, data.content.accessToken)
            }

            let userLogin = JSON.stringify(data.content)
            localStorage.setItem(USER_LOGIN, userLogin);
            yield put(setUserLoginAction(userLogin));

            let {history}  = yield select(state => state.HistoryReducer);
            history.push(URL_DASHBOARD);
        }

    }catch (err) {
        console.log(err.response)
    }

    yield put(hideLoadingAction())
}

export function * followSignIn() {
    yield takeLatest(SAGA_USER_SIGN_IN_API, signIn)
}