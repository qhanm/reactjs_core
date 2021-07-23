import {createStore, combineReducers, applyMiddleware} from "redux";
import createMiddleWareSaga  from 'redux-saga';
import { rootSaga } from "./sagas/rootSaga";
import {UserLoginReducer} from "./reducers/UserLoginReducer";
import {LoadingReducer} from "./reducers/LoadingReducer";
import {HistoryReducer} from "./reducers/HistoryReducer";

const middlewareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    UserLoginReducer,
    LoadingReducer,
    HistoryReducer,
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export default store