import {SAGA_USER_SIGN_IN_API} from "../../constants/Auth/UserLoginConstantSaga";

export const signInSagaAction = (userLogin) => {
    return {
        type: SAGA_USER_SIGN_IN_API,
        userLogin,
    }
}