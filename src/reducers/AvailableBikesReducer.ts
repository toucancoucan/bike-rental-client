import {bikeForRent} from "../copiedFromServer/entityTypes";
import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import {apiRoutes} from "../constants/apiRoutes";


const SET_BIKE_FOR_RENT = 'SET_BIKE_FOR_RENT';

export type setBikesForRentType = {
    type: typeof SET_BIKE_FOR_RENT,
    payload: Array<bikeForRent>
}

export const setBikesForRent = (item: Array<bikeForRent>): setBikesForRentType => {
    return {
        type: SET_BIKE_FOR_RENT,
        payload: item
    }
}

export const fetchAndSetBikesForRent = (): ThunkAction<Promise<void>, rootState, any, setBikesForRentType> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.getAvailable)
        if (response.ok) {
            let data = await response.json();
            dispatch(setBikesForRent(data))
        } else {
            console.log("Error" + response.status);
        }
    }
}



export type AvailableBikesReducerType = {
    availableBikes: Array<bikeForRent>
}

const AvailableBikesReducerInitialState: AvailableBikesReducerType = {
    availableBikes:[]
}

type actionTypes = setBikesForRentType;

const AvailableBikesReducer = (state = AvailableBikesReducerInitialState, action: actionTypes): AvailableBikesReducerType => {
    switch (action.type) {
        case SET_BIKE_FOR_RENT:
            return {
                ...state,
                availableBikes: action.payload
            }
        default:
            return state
    }

}

export default AvailableBikesReducer;