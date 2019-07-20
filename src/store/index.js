import {createStore, combineReducers} from "redux";
import {SheetReducer} from "./sheet/reducer";
import {WorkoutReducer} from "./workout/reducer";
import {SetReducer} from "./set/reducer";

export {SheetActionTypes} from "./sheet/reducer";
export {WorkoutActionTypes} from "./workout/reducer";
export {SetActionTypes} from "./set/reducer";

export const reducers = {
    "SET":SetReducer,
    "WORKOUT":WorkoutReducer,
    "SHEET":SheetReducer
}
export const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);