import {HIDE_LOADING, SHOW_LOADING} from "../constants/LoadingConstant";

export const showLoadingAction = () => {
    return {
        type: SHOW_LOADING
    }
}

export const hideLoadingAction = () => {
    return {
        type: HIDE_LOADING,
    }
}