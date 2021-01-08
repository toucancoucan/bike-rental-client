import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import BikeTypesReducer from "./BikeTypesReducer";
import RentedBikesReducer from "./RentedBikesReducer";
import AvailableBikesReducer from "./AvailableBikesReducer";

export const rootReducer = combineReducers({
    BikeTypesReducer,
    RentedBikesReducer,
    AvailableBikesReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export type rootState = ReturnType<typeof rootReducer>
export type appDispatch = typeof store.dispatch
export default store;