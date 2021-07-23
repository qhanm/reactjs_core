import {SET_USER_LOGIN} from "../constants/UserLoginConstant";

export const setUserLoginAction = (userLogin) => {
    return {
        type: SET_USER_LOGIN,
        userLogin
    }
}