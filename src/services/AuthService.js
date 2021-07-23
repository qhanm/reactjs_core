import Axios from 'axios';
import {DOMAIN_API} from "../util/constants/SettingConstant";

class AuthService
{
    constructor() {}

    signId(userInfo){
        return Axios({
            url: `${DOMAIN_API}users/signin`,
            method: 'post',
            data: {
                email: userInfo.email,
                password: userInfo.password,
            }
        })
    }
}

export const authService = new AuthService();