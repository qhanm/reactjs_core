import {USER_LOGIN} from "../../util/constants/SettingConstant";
import {SET_USER_LOGIN} from "../constants/UserLoginConstant";

let userLogin = {};

if(localStorage.getItem(USER_LOGIN))
{
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: userLogin
}

export const UserLoginReducer = (state = stateDefault, action) => {

    switch (action.type)
    {
        case SET_USER_LOGIN: {
            return {
                ...state,
                userLogin: action.userLogin
            }
        }
    }

    return {...state}
}