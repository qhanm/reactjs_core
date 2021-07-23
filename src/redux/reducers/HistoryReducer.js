import {ADD_HISTORY} from "../actions/HistoryAction";

const stateDefault = {
    history: {}
};

export const HistoryReducer = (state = stateDefault, action) => {
    switch (action.type)
    {
        case ADD_HISTORY: {
            return {...state, history: action.history}
        }
        default:
            return {...state};
    }
}